import { useQuery } from '@tanstack/react-query';

// Services
import { getTransactions } from '@services/transaction.service';

// Constants
import { END_POINTS } from '@constants/index';

export const useTransaction = () => {
  const query = useQuery({
    queryKey: [END_POINTS.TRANSACTIONS],
    queryFn: () => getTransactions(),
  });

  // TODO: update return value later
  return query;
};
