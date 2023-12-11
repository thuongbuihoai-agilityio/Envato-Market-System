import { useMutation } from '@tanstack/react-query';

// Interfaces
import { TUser } from '@app/interfaces';

// Services
import { UsersHttpService } from '@app/services';

// Constants
import { END_POINTS } from '@app/constants';

export const useUser = () => {
  const updateUserMutation = useMutation({
    mutationFn: async (user: TUser) => {
      const response = await UsersHttpService.put<TUser>(
        `${END_POINTS.USERS}/${user.id}`,
        user,
      );
      return response.data;
    },
  });

  return {
    updateUserMutation,
  };
};
