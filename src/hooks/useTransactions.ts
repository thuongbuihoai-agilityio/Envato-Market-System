import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

// Services
import { getTransactions } from '@app/services/transaction.service';

// Constants
import { END_POINTS } from '@app/constants';

// Types
import { TTransaction } from '@app/interfaces/transaction';

export type TSearchTransaction = {
  name: string;
  month?: string;
  limit?: number;
  pageParam?: number;
};

export const useTransactions = (queryParam?: TSearchTransaction) => {
  const { name: searchName, month: searchMonth, limit, pageParam }: TSearchTransaction =
    Object.assign(
      {
        limit: 1,
        pageParam: 1,
        name: '',
        month: '',
      },
      queryParam,
    );

  const { data = [], ...query } = useQuery({
    queryKey: [END_POINTS.TRANSACTIONS, limit, pageParam, searchName, searchMonth],
    queryFn: () => getTransactions(limit, pageParam),
  });

  /**
   * TODO: Since the API is imprecise we will use this method for now.
   * TODO: Will be removed in the future and will use queryKey for re-fetching
   */
  const transactions: TTransaction[] = useMemo((): TTransaction[] => {
    const isNameMatchWith = (target: string): boolean =>
      target.trim().includes(searchName);

    return data.filter(
      ({ customer: { name, email, location } }: TTransaction) => {
        const isMatchWithName: boolean = isNameMatchWith(name);
        const isMatchWithEmail: boolean = isNameMatchWith(email);
        const isMatchWithLocation: boolean = isNameMatchWith(location);

        return isMatchWithEmail || isMatchWithLocation || isMatchWithName;
      },
    );
  }, [data, searchName]);

  return {
    ...query,
    data: transactions,
  };
};
