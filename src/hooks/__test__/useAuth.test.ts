import { act, renderHook } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';

// Hooks
import { useAuth, TUseAuth } from '@app/hooks';

// Services
import { UsersHttpService } from '@app/services';

// Constants
import { ERROR_MESSAGES } from '@app/constants/messages';

const setup = () => renderHook<TUseAuth, () => void>(useAuth);
const SIGN_IN_PARAM = {
  email: 'duong.pham@asnet.com.vn',
  password: 'Abcd@1231',
};

describe('useAuth', () => {
  it('Match default value', () => {
    const {
      result: {
        current: { user },
      },
    } = setup();

    expect(user).toBeFalsy();
  });

  it('SignIn fail', async () => {
    try {
      jest.spyOn(axios, 'get').mockResolvedValue([]);
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

    expect(useAuth.getState().user).toEqual(SIGN_IN_PARAM);
  });
});
