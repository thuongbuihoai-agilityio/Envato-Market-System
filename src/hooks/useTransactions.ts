import { useMemo } from 'react';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

// Services
import { getTransactions } from '@services/transaction.service';

// Constants
import { END_POINTS } from '@constants/index';

// Types
import { TTransaction } from '@interfaces/transaction';

export type TSearchValue = {
  search: string;
  select: string;
};

export const useTransactions = <TError = Error>(
  options?: UseQueryOptions<TTransaction[], TError>,
) => {
  const { queryKey = [], queryFn, ...option } = options || {};

  const { data = [], ...query } = useQuery({
    queryKey: [END_POINTS.TRANSACTIONS, ...queryKey],
    queryFn: queryFn || (() => getTransactions()),
    ...option,
  });

  /**
   * TODO: Since the API is imprecise we will use this method for now.
   * TODO: Will be removed in the future and will use queryKey for re-fetching
   */
  const transactions: TTransaction[] = useMemo((): TTransaction[] => {
    const isMatchWith = (value: string): boolean =>
      queryKey.some((key) =>
        value.toLowerCase().includes(`${key}`.toLowerCase()),
      );

    return data.filter(
      ({ customer: { name, email, location } }: TTransaction) => {
        const isMatchWithUser: boolean = isMatchWith(name);
        const isMatchWithEmail: boolean = isMatchWith(email);
        const isMatchWithLocation: boolean = isMatchWith(location);

        return isMatchWithUser || isMatchWithEmail || isMatchWithLocation;
      },
    );
  }, [data, queryKey]);

  return {
    ...query,
    data: transactions,
  };
};
