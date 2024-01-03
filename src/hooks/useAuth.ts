import { useCallback } from 'react';
import { AxiosResponse } from 'axios';
import { shallow } from 'zustand/shallow';

// Constants
import { END_POINTS, ERROR_MESSAGES, IMAGES } from '@app/constants';

// Services
import { AuthenticationHttpService } from '@app/services';

// Types
import { TUserDetail } from '@app/interfaces/user';

// Utils
import { getCurrentTimeSeconds } from '@app/utils';

// Stores
import { authStore } from '@app/stores';

type TSignUpErrorField = Partial<
  Record<keyof Omit<TUserDetail, 'id' | 'createdAt'>, string>
>;

export type TUserInfo = Omit<TUserDetail, 'password'> | null;

export type TUseAuth = {
  user: TUserInfo;
  isRemember: boolean;
  date: number;
  setUser: (user: TUserDetail) => void;
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

export const useAuth = () => {
  const { updateStore, clearStore } = authStore(
    (state) => ({
      updateStore: state.updateStore,
      clearStore: state.clearStore,
    }),
    shallow,
  );

  const handleSignIn = useCallback(
    async (
      {
        email,
        password,
      }: {
        email: string;
        password: string;
      },
      isRemember?: boolean,
    ): Promise<void> => {
      const { data }: AxiosResponse<TUserInfo | undefined> =
        await AuthenticationHttpService.post<TUserInfo | undefined>(
          `${END_POINTS.SIGN_IN}`,
          {
            email,
            password,
          },
          {},
        );

      return updateStore({
        user: data,
        isRemember,
        date: getCurrentTimeSeconds(),
      });
    },
    [updateStore],
  );

  const handleSignUp = useCallback(
    async (
      userInfo: Omit<TUserDetail, 'id' | 'createdAt'>,
    ): Promise<{
      errors?: TSignUpErrorField;
    }> => {
      const { email, password, firstName, lastName } = userInfo;
      try {
        const { data }: AxiosResponse<TUserInfo | undefined> =
          await AuthenticationHttpService.post<TUserInfo | undefined>(
            `${END_POINTS.SIGN_UP}`,
            {
              ...userInfo,
              avatarURL: IMAGES.AVATAR_SIGN_UP.url,
              createdAt: Date.now(),
              email,
              password,
              firstName,
              lastName,
            },
            {},
          );
        updateStore({ user: data, date: getCurrentTimeSeconds() });
      } catch (error) {
        return {
          errors: {
            email: ERROR_MESSAGES.ACCOUNT_ALREADY_EXISTS,
          },
        };
      }

      return {};
    },
    [updateStore],
  );

  return {
    setUser: updateStore,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: clearStore,
  };
};
