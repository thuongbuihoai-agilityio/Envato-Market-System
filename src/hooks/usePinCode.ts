// Types
import { TPinCodeForm } from '@app/layouts/MainLayout';

// Services
import { AuthenticationHttpService } from '@app/services';

// Constants
import { END_POINTS } from '@app/constants';
import { useCallback } from 'react';
import { AxiosError } from 'axios';

export const usePinCode = () => {
  const handleSetPinCode = useCallback(async (data: TPinCodeForm) => {
    try {
      await AuthenticationHttpService.post<TPinCodeForm>(
        `${END_POINTS.CREATE_PIN}`,
        {
          pinCode: data.pinCode,
          userId: data.userId,
        },
        {},
      );
    } catch (error) {
      const { message } = error as AxiosError;

      throw new Error(message);
    }
  }, []);

  const handleConfirmPinCode = useCallback(async (data: TPinCodeForm) => {
    try {
      await AuthenticationHttpService.post<TPinCodeForm>(
        `${END_POINTS.CONFIRM_PIN}`,
        {
          pinCode: data.pinCode,
          userId: data.userId,
        },
        {},
      );
    } catch (error) {
      const { message } = error as AxiosError;

      throw new Error(message);
    }
  }, []);

  return { handleSetPinCode, handleConfirmPinCode };
};
