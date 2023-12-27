import { useCallback, useEffect, useMemo, useState } from 'react';

// Types
import { TTransaction } from '@app/interfaces';
import { TOption } from '@app/components/common/Select';
import { PaginationType } from '@app/interfaces/pagination';

// Utils
import { formatPagination } from '@app/utils';

// Constants
import { PAGE_SIZE, PREV } from '@app/constants';

export const usePagination = (transactions: TTransaction[]) => {
  const [data, setData] = useState<PaginationType>({
    limit: PAGE_SIZE,
    currentPage: 1,
    arrOfCurrButtons: [],
  });

  const { limit, currentPage, arrOfCurrButtons } = data;
  const totalCount = transactions.length;

  const isDisabledPrev = currentPage <= 1;
  const lastPage = Math.floor((totalCount + limit - 1) / limit);
  const isDisableNext = currentPage === lastPage || currentPage < 1;

  const filterData = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = limit + start;

    return transactions.slice(start, end);
  }, [currentPage, limit, transactions]);

  const resetPage = useCallback(
    () => setData((prev) => ({ ...prev, currentPage: 1 })),
    [],
  );

  useEffect(() => {
    const tempNumberOfButtons = formatPagination({
      totalCount,
      limit,
      currentPage,
      arrOfCurrButtons,
    });

    setData({
      ...data,
      arrOfCurrButtons: tempNumberOfButtons,
    });
  }, [currentPage, limit, totalCount]);

  const handleChangeLimit = useCallback(
    (limit: TOption) => {
      setData({
        ...data,
        limit: +limit.value,
      });
      resetPage();
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

  const handlePageChange = useCallback(
    (direction: string) => {
      setData({
        ...data,
        currentPage: direction === PREV ? currentPage - 1 : currentPage + 1,
      });
    },
    [currentPage, data],
  );

  const handlePageClick = useCallback(
    (value: number) => {
      setData({
        ...data,
        currentPage: value,
      });
    },
    [currentPage, data],
  );

  return {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    setData,
    resetPage,
    handleChangeLimit,
    handleChangePage,
    handlePageChange,
    handlePageClick,
  };
};
