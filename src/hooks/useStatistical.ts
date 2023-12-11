// Libs
import { useQuery } from '@tanstack/react-query';

// Services
import { getStatistical } from '@app/services';

export const useGetStatistic = <T>(endPoint: string) =>
  useQuery<T>({
    queryKey: [endPoint],
    queryFn: () => getStatistical(endPoint),
  });
