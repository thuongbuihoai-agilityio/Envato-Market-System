import { useQuery } from '@tanstack/react-query';

// Services
import { getTransactions } from '@services/transaction.service';

export const useTransaction = () => {
  const query = useQuery({
    queryKey: [''],
    queryFn: () => getTransactions(),
  });

  // TODO: update return value later
  return query;
};
