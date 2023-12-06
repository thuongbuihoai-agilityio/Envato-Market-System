// Libs
import { useQuery } from '@tanstack/react-query';

// Constants
import { END_POINTS, STATISTICAL_QUERY_KEY } from '@constants/index';

// Types
import { ISpendingStatistics } from '@interfaces/spending';

// Services
import { StatisticalHttpService } from '@services/index';

export const useGetTotalStatistic = () =>
  useQuery({
    queryKey: [STATISTICAL_QUERY_KEY.TOTAL_STATISTICS],
    queryFn: () => StatisticalHttpService.get(END_POINTS.STATISTICS),
    retry: 2,
    select: (response) => response.data as ISpendingStatistics[],
  });
