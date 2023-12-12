import { useMutation } from '@tanstack/react-query';

// Interfaces
import { TUser } from '@app/interfaces';

// Services
import { UsersHttpService } from '@app/services';

// Constants
import { END_POINTS } from '@app/constants';

export const useUpdateUser = () => {
  const { error, ...rest } = useMutation({
    mutationFn: async (user: TUser) =>
      await UsersHttpService.put<TUser>(`${END_POINTS.USERS}/${user.id}`, user),
  });

  return {
    ...rest,
    error: error?.message || '',
  };
};
