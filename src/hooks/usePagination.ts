import { useCallback } from 'react';
import { useSearch } from '.';

export const usePagination = () => {
  const { searchParam, setSearchParam } = useSearch({
    limit: '10',
    page: '1',
  });

  const handleChangeLimit = useCallback(
    (limit: number) => {
      searchParam.page = '1';
      setSearchParam('limit', limit.toString());
    },
    [searchParam, setSearchParam],
  );

  const handleChangePage = useCallback(
    (page: number) => {
      setSearchParam('page', page.toString());
    },
    [setSearchParam],
  );

  return {
    searchParam,
    handleChangeLimit,
    handleChangePage,
  };
};
