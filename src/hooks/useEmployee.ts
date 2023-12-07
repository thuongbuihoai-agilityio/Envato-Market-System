import { useQuery } from '@tanstack/react-query';

// Services
import { getEmployees } from '@services/index';

export const useEmployee = () => {
  const query = useQuery({
    queryKey: [''],
    queryFn: getEmployees,
  });

  // TODO: update return value later
  return query;
};
