import { FunctionComponent } from 'react';
import { Control, useForm } from 'react-hook-form';

// Hooks
import { useDebounce, useSearch, TSearchTransaction } from '@app/hooks';

// Types
import { TSearchValue } from '@app/components/common/SearchBar';

export interface TWithTransaction {
  searchTransactionValue: string;
  controlInputTransaction: Control<TSearchValue>;
  onSearchTransaction: () => void;
}

export const withTransactions = <TProps extends TWithTransaction>(
  Component: FunctionComponent<TProps & TWithTransaction>,
): FunctionComponent<Omit<TProps, keyof TWithTransaction>> => {
  const NewComponent = (
    props: Omit<TProps, keyof TWithTransaction>,
  ): JSX.Element => {
    const {
      searchParam: searchTransaction,
      setSearchParam: setSearchTransaction,
    } = useSearch<TSearchTransaction>({
      name: '',
    });

    // Form control for search
    const { control, getValues } = useForm<TSearchValue>({
      defaultValues: {
        search: searchTransaction.name,
      },
    });

    // Update search params when end time debounce
    const handleDebounceSearch = useDebounce(
      () => setSearchTransaction('name', getValues().search),
      [],
    );

    return (
      <Component
        {...(props as TProps)}
        controlInputTransaction={control}
        onSearchTransaction={handleDebounceSearch}
        searchTransactionValue={searchTransaction.name}
      />
    );
  };

  return NewComponent;
};
