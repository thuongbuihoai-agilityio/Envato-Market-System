import { Box, Td, Text, Th, useToast } from '@chakra-ui/react';
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
import { formatUppercaseFirstLetter, getTransactionHomePage } from '@app/utils';

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
import { authStore } from '@app/stores';

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

  const { user } = authStore();

  const {
    data: transactions = [],
    dataHistory,
    dataTransaction,
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
    useUpdateTransaction,
  } = useTransactions(
    {
      name: searchTransaction.name,
    },
    user?.id,
  );

  const listData = isTableHistory ? dataHistory : dataTransaction;

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

  const handleUpdateTransaction = useCallback(
    (updateCustomer: TTransaction) => {
      const {
        customer: { firstName, lastName, address },
      } = updateCustomer;
      updateTransaction(
        {
          transactionId: updateCustomer._id,
          userId: user?.id,
          firstName: firstName,
          lastName: lastName,
          state: address.state,
          street: address.street,
          city: address.city,
          zip: address.zip,
        },
        {
          onSuccess: () => {
            toast({
              title: SUCCESS_MESSAGES.UPDATE_SUCCESS.title,
              description: SUCCESS_MESSAGES.DELETE_SUCCESS.description,
              status: 'success',
              duration: SHOW_TIME,
              isClosable: true,
              position: 'top-right',
            });
          },
          onError: () => {
            toast({
              title: ERROR_MESSAGES.UPDATE_FAIL.title,
              description: ERROR_MESSAGES.UPDATE_FAIL.description,
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

  const handleDeleteTransaction = useCallback(
    (updateData: TTransaction) => {
      updateTransaction(
        {
          ...updateData,
          transactionId: updateData._id,
          userId: user?.id,
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
      <CustomerNameCell id={id} key={id} image={image} name={name} />
    ),
    [],
  );

  const renderActionIcon = useCallback(
    (data: TTransaction) => (
      <ActionCell
        key={`${data._id}-action`}
        isOpenModal={isTableHistory ? !isOpenModal : isOpenModal}
        transaction={data}
        onDeleteTransaction={handleDeleteTransaction}
        onUpdateTransaction={handleUpdateTransaction}
      />
    ),
    [],
  );

  type TStatus = keyof typeof STATUS_LABEL;

  const renderPaymentStatus = useCallback(
    ({ paymentStatus }: TDataSource): JSX.Element => (
      <StatusCell
        variant={STATUS_LABEL[`${paymentStatus}` as TStatus]}
        text={paymentStatus as string}
      />
    ),
    [],
  );

  const renderTransactionStatus = useCallback(
    ({ transactionStatus }: TDataSource): JSX.Element => (
      <StatusCell
        variant={STATUS_LABEL[`${transactionStatus}` as TStatus]}
        text={transactionStatus as string}
      />
    ),
    [],
  );

  const renderRole = useCallback(
    ({ customer: { role } }: TTransaction): JSX.Element => (
      <Td
        py={5}
        pr={5}
        pl={0}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="left"
        w={{ base: 150, md: 20 }}
      >
        <Text
          fontSize="md"
          fontWeight="semibold"
          whiteSpace="break-spaces"
          noOfLines={1}
          w={{ base: 100, md: 150, '6xl': 250 }}
          flex={1}
        >
          {formatUppercaseFirstLetter(role)}
        </Text>
      </Td>
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
    return COLUMNS_DASHBOARD(
      renderHead,
      renderRole,
      renderNameUser,
      renderActionIcon,
    );
  }, [
    isTableHistory,
    renderRole,
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
