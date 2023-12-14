import { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { StorageValue, persist, createJSONStorage } from 'zustand/middleware';

// Constants
import { END_POINTS, SEARCH_PARAM, ERROR_MESSAGES } from '@app/constants';

// Services
import { UsersHttpService } from '@app/services';

// Types
import { TUserDetail } from '@app/interfaces/user';

// Utils
import { getCurrentTimeSeconds } from '@app/utils';

type TSignUpErrorField = Partial<
  Record<keyof Omit<TUserDetail, 'id' | 'createdAt'>, string>
>;

export type TUserInfo = Omit<TUserDetail, 'password'> | null;

export type TUseAuth = {
  user: TUserInfo;
  isRemember: boolean;
  date: number;
  setUser: (user: TUserDetail) => void;
  updateUserInfo: (updatedInfo: Partial<TUserDetail>) => Promise<void>;
  signIn: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    isRemember?: boolean,
  ) => Promise<void>;
  signUp: (userInfo: Omit<TUserDetail, 'id' | 'createdAt'>) => Promise<{
    errors?: TSignUpErrorField;
  }>;
  signOut: () => void;
};

export const useAuth = create(
  persist<TUseAuth>(
    (set) => ({
      user: null,
      isRemember: false,
      date: 0,
      setUser: (user) => set({ user }),
      signIn: async ({ email, password }, isRemember) => {
        const { data = [] }: AxiosResponse<TUserDetail[] | undefined> =
          await UsersHttpService.get<TUserDetail[] | undefined>(
            `${END_POINTS.USERS}?${SEARCH_PARAM.EMAIL}=${email}&${SEARCH_PARAM.PASSWORD}=${password}`,
          );

        // Because search by params working incorrect
        const user: TUserDetail | undefined = data.find(
          (user) => user.email === email && user.password === password,
        );

        if (!user) {
          throw new Error(ERROR_MESSAGES.AUTH_INCORRECT);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: pass, ...userInfo } = user;

        return set({
          user: userInfo,
          isRemember,
          date: getCurrentTimeSeconds(),
        });
      },
      signUp: async (userInfo) => {
        const { email, password } = userInfo;
        const { data = [] }: AxiosResponse<TUserDetail[] | undefined> =
          await UsersHttpService.get<TUserDetail[] | undefined>(
            `${END_POINTS.USERS}?${SEARCH_PARAM.EMAIL}=${email}&${SEARCH_PARAM.PASSWORD}=${password}`,
          );
        // Because search by params working incorrect
        const user: TUserDetail | undefined = data.find(
          (user) => user.email === email,
        );

        if (user) {
          return {
            errors: {
              email: ERROR_MESSAGES.ACCOUNT_ALREADY_EXISTS,
            },
          };
        }

        // Send request add new user
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: responsePassword, ...response }: TUserDetail =
          await UsersHttpService.post<TUserDetail>(
            END_POINTS.USERS,
            {
              ...userInfo,
              createdAt: Date.now(),
            },
            {},
          ).then((res) => res.data);

        // Save user into store
        set({ user: response, date: getCurrentTimeSeconds() });

        return {};
      },

      signOut: () => {
        set({ user: null, isRemember: false, date: 0 });

        useAuth.persist.clearStorage();
      },

      updateUserInfo: async (updatedInfo) => {
        const currentUser = useAuth.getState().user;

        if (!currentUser) {
          return;
        }

        try {
          const response = await UsersHttpService.put<TUserDetail>(
            `${END_POINTS.USERS}/${currentUser.id}`,
            updatedInfo,
          );

          const updatedUser = response.data;

          set((currentState: TUseAuth) => {
            if (currentState.user) {
              return {
                user: {
                  ...currentState.user,
                  ...updatedUser,
                },
              };
            }
            return currentState;
          });
        } catch {
          throw new Error(ERROR_MESSAGES.UPDATE_FAIL);
        }
      },
    }),
    {
      name: 'authentication',
      storage: createJSONStorage(() => ({
        setItem: (key: string, value: string) => {
          const {
            state: { user },
          }: StorageValue<TUseAuth> = JSON.parse(value);

          if (user) {
            localStorage.setItem(key, value);
          }
        },
        getItem: localStorage.getItem.bind(localStorage),
        removeItem: localStorage.removeItem.bind(localStorage),
      })),
    },
  ),
);
