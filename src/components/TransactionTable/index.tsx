import { Box, Th, useToast } from '@chakra-ui/react';
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
} from '@app/components/index';

// Utils
import { formatTimeStamp, getTransactionHomePage } from '@app/utils';

// Hooks
import {
  TSearchTransaction,
  TSortField,
  useDebounce,
  usePagination,
  useSearch,
  useTransactions,
} from '@app/hooks';

// Constants
import {
  COLUMNS_DASHBOARD,
  COLUMNS_HISTORY,
  ERROR_MESSAGES,
  SHOW_TIME,
  STATUS_LABEL,
  SUCCESS_MESSAGES,
  TRANSACTION_STATUS_ENUM,
} from '@app/constants';

// Types
import { TDataSource, THeaderTable, TTransaction } from '@app/interfaces';

interface TFilterUserProps {
  isOpenModal?: boolean;
  isTableHistory?: boolean;
}

const TransactionTableComponent = ({
  isTableHistory = false,
  isOpenModal = false,
}: TFilterUserProps) => {
  const {
    searchParam: searchTransaction,
    setSearchParam: setSearchTransaction,
  } = useSearch<TSearchTransaction>({
    name: '',
  });

  const {
    data: transactions = [],
    dataHistory,
    dataTransaction,
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
    useUpdateTransaction,
  } = useTransactions({
    name: searchTransaction.name,
  });

  const listData = isTableHistory ? dataHistory : dataTransaction;

  console.log('listData', listData);

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    resetPage,
    handleChangeLimit,
    handlePageChange,
    handlePageClick,
  } = usePagination(listData);

  const toast = useToast();
  const { mutate: updateTransaction } = useUpdateTransaction();

  const handleDeleteTransaction = useCallback(
    (updateData: TTransaction) => {
      updateTransaction(
        {
          ...updateData,
          date: formatTimeStamp(updateData.date).toString(),
          transactionStatus: TRANSACTION_STATUS_ENUM.ARCHIVED,
        },
        {
          onSuccess: () => {
            toast({
              title: SUCCESS_MESSAGES.DELETE_SUCCESS.title,
              description: SUCCESS_MESSAGES.DELETE_SUCCESS.description,
              status: 'success',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          },
          onError: () => {
            toast({
              title: ERROR_MESSAGES.DELETE_FAIL.title,
              description: ERROR_MESSAGES.DELETE_FAIL.description,
              status: 'error',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          },
        },
      );
    },
    [updateTransaction],
  );

  // Update search params when end time debounce
  const handleDebounceSearch = useDebounce((value: string) => {
    resetPage();
    setSearchTransaction('name', value);
  }, []);

  const renderHead = useCallback(
    (title: string, key: string): JSX.Element => {
      const handleClick = () => {
        sortBy && sortBy(key as TSortField);
      };

      if (!title) return <Th w={50} maxW={50} />;

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
    (data: TTransaction) => (
      <ActionCell
        key={`${data.id}-action`}
        isOpenModal={isTableHistory ? !isOpenModal : isOpenModal}
        transaction={data}
        onDeleteTransaction={handleDeleteTransaction}
      />
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
    <>
      <SearchBar
        searchValue={searchTransaction.name}
        onSearch={handleDebounceSearch}
      />
      <Fetching isLoading={isLoadingTransactions} isError={isTransactionsError}>
        <Box mt={5}>
          <Table
            columns={columns as THeaderTable[]}
            dataSource={getTransactionHomePage(filterData)}
          />
        </Box>
        {!!transactions.length && (
          <Box mt={8}>
            <Pagination
              pageSize={data.limit}
              currentPage={data.currentPage}
              isDisabledPrev={isDisabledPrev}
              isDisableNext={isDisableNext}
              arrOfCurrButtons={arrOfCurrButtons}
              onLimitChange={handleChangeLimit}
              onPageChange={handlePageChange}
              onClickPage={handlePageClick}
            />
          </Box>
        )}
      </Fetching>
    </>
  );
};

const TransactionTable = memo(TransactionTableComponent, isEqual);

export default TransactionTable;
