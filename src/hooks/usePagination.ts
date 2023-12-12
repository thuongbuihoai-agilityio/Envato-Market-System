import { useCallback, useState } from 'react';

export const usePagination = () => {
  const [limitData, setLimitData] = useState({
    limit: 1,
    currentPage: 1,
  });

  const handleChangePage = useCallback(
    (value: number) => {
      setLimitData({
        ...limitData,
        currentPage: value,
      });
    },
    [limitData],
  );

  const handleChangeLimit = useCallback(
    (value: number) => {
      setLimitData({
        ...limitData,
        limit: value,
        currentPage: 1,
      });
    },
    [limitData],
  );

  return {
    limitData,
    handleChangeLimit,
    handleChangePage,
  };
};
