// Libs
import { useQuery } from '@tanstack/react-query';

// Services
import { getStatistical } from '@services/index';

export const useGetStatistic = <T>(endPoint: string) =>
  useQuery<T>({
    queryKey: [endPoint],
    queryFn: () => getStatistical(endPoint),
    retry: 2,
  });
