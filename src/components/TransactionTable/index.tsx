import { Box, Spinner } from '@chakra-ui/react';
import { Suspense, memo, useCallback, useMemo } from 'react';

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
} from '@app/components/index';

// Utils
import { getTransactionHomePage } from '@app/utils/transaction';

// Hocs
import { TWithTransaction } from '@app/hocs';

// Hooks
import { TSortField, usePagination, useTransactions } from '@app/hooks';

// Constants
import { COLUMNS_DASHBOARD, COLUMNS_HISTORY } from '@app/constants/columns';
import { STATUS_LABEL } from '@app/constants/status';

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

  const { data, filterData, setData, handleChangeLimit, handleChangePage } =
    usePagination(transactions);

  const handleSearchWithPagination = useCallback(() => {
    setData((prevData) => ({
      ...prevData,
      currentPage:
        transactions.length < data.limit || searchTransactionValue === ''
          ? 1
          : prevData.currentPage,
    }));
    onSearchTransaction();
  }, [
    transactions.length,
    data.limit,
    searchTransactionValue,
    setData,
    onSearchTransaction,
  ]);

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

  const renderPaymentStatus = ({ paymentStatus }: TDataSource): JSX.Element => (
    <StatusCell
      variant={STATUS_LABEL[`${paymentStatus}` as TStatus]}
      text={paymentStatus}
    />
  );

  const renderTransactionStatus = ({
    transactionStatus,
  }: TDataSource): JSX.Element => (
    <StatusCell
      variant={STATUS_LABEL[`${transactionStatus}` as TStatus]}
      text={transactionStatus}
    />
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
  }, [isTableHistory]);

  return (
    <Fetching isLoading={isLoadingTransactions} isError={isTransactionsError}>
      <SearchBar
        control={controlInputTransaction}
        onSearch={handleSearchWithPagination}
      />
      <Box mt={5}>
        <Suspense fallback={<Spinner />}>
          <Table
            columns={columns as THeaderTable[]}
            dataSource={getTransactionHomePage(filterData)}
          />
        </Suspense>
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

const TransactionTable = memo(TransactionTableComponent);

export default TransactionTable;
