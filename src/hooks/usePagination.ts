import { TTransaction } from '@app/interfaces';
import { useCallback, useMemo, useState } from 'react';

export const usePagination = (transactions: TTransaction[]) => {
  const [data, setData] = useState({
    limit: 10,
    currentPage: 1,
  });

  const { limit, currentPage } = data;

  const filterData = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = limit + start;

    return transactions.slice(start, end);
  }, [currentPage, limit, transactions]);

  const handleChangeLimit = useCallback(
    (limit: number) => {
      setData({
        ...data,
        currentPage: (data.currentPage = 1),
        limit,
      });
    },
    [data],
  );

  const handleChangePage = useCallback(
    (currentPage: number) => {
      setData({
        ...data,
        currentPage,
      });
    },
    [data],
  );

  return {
    data,
    filterData,
    handleChangeLimit,
    handleChangePage,
  };
};
