import { useQuery } from '@tanstack/react-query';

// Services
import { getEmployees } from '@app/services';

export const useEmployee = (searchParam = '') => {
  const query = useQuery({
    queryKey: ['', searchParam],
    queryFn: () => getEmployees(searchParam),
  });

  // TODO: update return value later
  return query;
};
