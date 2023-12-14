import { Box } from '@chakra-ui/react';
import { memo, useCallback, useMemo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import {
  Table,
  Pagination,
  CustomerNameCell,
  HeadCell,
  ActionCell,
  SearchBar,
  StatusCell,
  Fetching,
  Lazy,
} from '@app/components/index';

// Utils
import { getTransactionHomePage } from '@app/utils';

// HOCs
import { TWithTransaction } from '@app/hocs';

// Hooks
import { TSortField, usePagination, useTransactions } from '@app/hooks';

// Constants
import {
  COLUMNS_DASHBOARD,
  COLUMNS_HISTORY,
  STATUS_LABEL,
} from '@app/constants';

// Types
import { TDataSource, THeaderTable } from '@app/interfaces';

interface TFilterUserProps extends TWithTransaction {
  isTableHistory?: boolean;
}

const TransactionTableComponent = ({
  isTableHistory = false,
  searchTransactionValue,
  controlInputTransaction,
  onSearchTransaction,
}: TFilterUserProps) => {
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
  } = useTransactions({
    name: searchTransactionValue,
  });

  const {
    data,
    filterData,
    handleChangeLimit,
    handleChangePage,
    handleSearchWithPagination,
  } = usePagination(transactions);

  const handleSearchParams = useCallback(() => {
    handleSearchWithPagination(searchTransactionValue, onSearchTransaction);
  }, [handleSearchWithPagination, onSearchTransaction, searchTransactionValue]);

  const renderHead = useCallback(
    (title: string, key: string): JSX.Element => {
      const handleClick = () => {
        sortBy && sortBy(key as TSortField);
      };

      return <HeadCell key={title} title={title} onClick={handleClick} />;
    },
    [sortBy],
  );

  const renderNameUser = useCallback(
    ({ id, image, name }: TDataSource): JSX.Element => (
      <CustomerNameCell key={id} id={id} image={image} name={name} />
    ),
    [],
  );

  const renderActionIcon = useCallback(
    (data: TDataSource): JSX.Element => (
      <ActionCell key={`${data.id}-action`} />
    ),
    [],
  );

  type TStatus = keyof typeof STATUS_LABEL;

  const renderPaymentStatus = useCallback(
    ({ paymentStatus }: TDataSource): JSX.Element => (
      <StatusCell
        variant={STATUS_LABEL[`${paymentStatus}` as TStatus]}
        text={paymentStatus}
      />
    ),
    [],
  );

  const renderTransactionStatus = useCallback(
    ({ transactionStatus }: TDataSource): JSX.Element => (
      <StatusCell
        variant={STATUS_LABEL[`${transactionStatus}` as TStatus]}
        text={transactionStatus}
      />
    ),
    [],
  );

  const columns = useMemo(() => {
    if (isTableHistory) {
      return COLUMNS_HISTORY(
        renderHead,
        renderNameUser,
        renderPaymentStatus,
        renderTransactionStatus,
        renderActionIcon,
      );
    }
    return COLUMNS_DASHBOARD(renderHead, renderNameUser, renderActionIcon);
  }, [
    isTableHistory,
    renderActionIcon,
    renderHead,
    renderNameUser,
    renderPaymentStatus,
    renderTransactionStatus,
  ]);

  return (
    <Fetching isLoading={isLoadingTransactions} isError={isTransactionsError}>
      <SearchBar
        control={controlInputTransaction}
        onSearch={handleSearchParams}
      />
      <Box mt={5}>
        <Lazy>
          <Table
            columns={columns as THeaderTable[]}
            dataSource={getTransactionHomePage(filterData)}
          />
        </Lazy>
      </Box>
      {!!transactions.length && (
        <Box mt={8}>
          <Pagination
            pageSize={data.limit}
            currentPage={data.currentPage}
            totalCount={transactions.length}
            onLimitChange={handleChangeLimit}
            onPageChange={handleChangePage}
          />
        </Box>
      )}
    </Fetching>
  );
};

const TransactionTable = memo(TransactionTableComponent, isEqual);

export default TransactionTable;
