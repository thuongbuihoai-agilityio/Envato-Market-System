import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// Utils
import { cleanUpSearchParam } from '@utils/index';

export const useSearch = <TParam = Partial<Record<string, string>>>(
  defaultParam: TParam,
) => {
  const [search, setSearch] = useSearchParams(defaultParam || {});
  const searchParam: TParam = useMemo((): TParam => {
    let obj: TParam = {} as TParam;
    Object.keys(defaultParam as object).forEach((key) => {
      obj = {
        ...obj,
        [key]: search.get(key) || '',
      };
    });

    return obj;
  }, [defaultParam, search]);

  const setSearchParam = useCallback(
    (key: keyof TParam, value: string) =>
      setSearch(
        cleanUpSearchParam({
          ...searchParam,
          [key]: value,
        }),
      ),
    [searchParam, setSearch],
  );

  return {
    searchParam,
    defaultQuery: search,
    setSearchParam,
  };
};
