import { AxiosResponse } from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Constants
import { END_POINTS, SEARCH_PARAM, ERROR_MESSAGES } from '@constants/index';

// Services
import { UsersHttpService } from '@services/index';

// Types
import { TUser } from '@interfaces/user';

type TSignUpErrorField = Partial<
  Record<keyof Omit<TUser, 'id' | 'createdAt'>, string>
>;

export type TUseAuth = {
  user: TUser | null;
  isRemember: boolean;
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
  signUp: (userInfo: Omit<TUser, 'id' | 'createdAt'>) => Promise<{
    errors?: TSignUpErrorField;
  }>;
};

export const useAuth = create(
  persist<TUseAuth>(
    (set) => ({
      user: null,
      isRemember: false,
      signIn: async ({ email, password }, isRemember) => {
        const { data = [] }: AxiosResponse<TUser[] | undefined> =
          await UsersHttpService.get<TUser[] | undefined>(
            `${END_POINTS.USERS}?${SEARCH_PARAM.EMAIL}=${email}&${SEARCH_PARAM.PASSWORD}=${password}`,
          );

        // Because search by params working incorrect
        const user: TUser | undefined = data.find(
          (user) => user.email === email && user.password === password,
        );

        if (!user) {
          throw new Error(ERROR_MESSAGES.AUTH_INCORRECT);
        }

        return set({ user, isRemember });
      },
      signUp: async (userInfo) => {
        const { email, password } = userInfo;
        const { data = [] }: AxiosResponse<TUser[] | undefined> =
          await UsersHttpService.get<TUser[] | undefined>(
            `${END_POINTS.USERS}?${SEARCH_PARAM.EMAIL}=${email}&${SEARCH_PARAM.PASSWORD}=${password}`,
          );
        // Because search by params working incorrect
        const user: TUser | undefined = data.find(
          (user) => user.email === email,
        );

        if (user) {
          return {
            errors: {
              email: ERROR_MESSAGES.IS_EXISTS('Email'),
            },
          };
        }

        // Send request add new user
        const response: TUser = await UsersHttpService.post<TUser>(
          END_POINTS.USERS,
          {
            ...userInfo,
            createdAt: Date.now(),
          },
          {},
        ).then((res) => res.data);

        // Save user into store
        set({ user: response });

        return {};
      },
    }),
    { name: 'authentication' },
  ),
);
