import { act, renderHook } from '@testing-library/react';
import { AxiosResponse } from 'axios';

// Hooks
import { useAuth } from '@app/hooks';

// Services
import { UsersHttpService } from '@app/services';

// Constants
import { ERROR_MESSAGES } from '@app/constants/messages';

// Stores
import { authStore } from '@app/stores';

// Types
import { TUserDetail } from '@app/interfaces';

const setup = () => renderHook(useAuth);
const SIGN_IN_PARAM = {
  email: 'duong.pham@asnet.com.vn',
  password: 'Abcd@1231',
};

describe('useAuth', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('SignIn fail', async () => {
    try {
      jest.spyOn(UsersHttpService, 'get').mockResolvedValue({
        data: undefined,
      } as AxiosResponse);
      const {
        result: {
          current: { signIn },
        },
      } = setup();

      await signIn(SIGN_IN_PARAM);
    } catch (error) {
      const { message } = error as unknown as Error;

      expect(message).toBe(ERROR_MESSAGES.AUTH_INCORRECT);
    }
  });

  it('SignIn success', async () => {
    jest.spyOn(UsersHttpService, 'get').mockResolvedValue({
      data: [SIGN_IN_PARAM],
    } as AxiosResponse);
    const {
      result: {
        current: { signIn },
      },
    } = setup();
    await act(async () => {
      await signIn(SIGN_IN_PARAM);
    });

    expect(authStore.getState().user).toEqual({ email: SIGN_IN_PARAM.email });
  });

  it('SignUp fail', async () => {
    jest.spyOn(UsersHttpService, 'get').mockResolvedValue({
      data: [SIGN_IN_PARAM],
    } as AxiosResponse);

    const {
      result: {
        current: { signUp },
      },
    } = setup();

    const { errors } = await act(
      async () => await signUp(SIGN_IN_PARAM as TUserDetail),
    );

    expect(errors).toEqual({
      email: ERROR_MESSAGES.ACCOUNT_ALREADY_EXISTS,
    });
  });

  it('SignUp success', async () => {
    jest.spyOn(UsersHttpService, 'get').mockResolvedValue({
      data: undefined,
    } as AxiosResponse);

    jest.spyOn(UsersHttpService, 'post').mockResolvedValue({
      data: SIGN_IN_PARAM,
    } as AxiosResponse);

    const {
      result: {
        current: { signUp },
      },
    } = setup();
    await act(async () => {
      await signUp(SIGN_IN_PARAM as TUserDetail);
    });

    expect(authStore.getState().user).toEqual({ email: SIGN_IN_PARAM.email });
  });

  it('Set profile', async () => {
    const {
      result: {
        current: { setUser },
      },
    } = setup();
    await act(async () => {
      await setUser(SIGN_IN_PARAM as TUserDetail);
    });

    expect(authStore.getState().user).toEqual(SIGN_IN_PARAM);
  });

  it('SignOut', async () => {
    const {
      result: {
        current: { signOut },
      },
    } = setup();
    await act(async () => {
      await authStore.setState({ user: SIGN_IN_PARAM as TUserDetail });
    });

    expect(authStore.getState().user).toEqual(SIGN_IN_PARAM);

    await act(async () => {
      await signOut();
    });

    expect(authStore.getState().user).toBe(null);
  });
});
