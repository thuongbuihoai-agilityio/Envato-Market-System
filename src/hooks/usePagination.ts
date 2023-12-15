import { useCallback, useMemo, useState } from 'react';

// Types
import { TTransaction } from '@app/interfaces';

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

  const handleSearchWithPagination = useCallback(
    (searchTransactionValue = '', onSearchTransaction: () => void) => {
      setData((prevData) => ({
        ...prevData,
        currentPage:
          transactions.length < data.limit || !searchTransactionValue
            ? 1
            : prevData.currentPage,
      }));
      onSearchTransaction();
    },
    [transactions.length, data.limit, setData],
  );

  const resetPage = useCallback(
    () => setData((prev) => ({ ...prev, currentPage: 1 })),
    [],
  );

  return {
    data,
    filterData,
    setData,
    resetPage,
    handleChangeLimit,
    handleChangePage,
    handleSearchWithPagination,
  };
};
