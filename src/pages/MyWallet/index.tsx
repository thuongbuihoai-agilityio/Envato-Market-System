import areEqual from 'react-fast-compare';
import { lazy, memo, useCallback, useMemo, useState } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import { Pagination, SearchBar, Fetching, Lazy } from '@app/components';

// Constants
import { END_POINTS } from '@app/constants';

// Hooks
import { useGetStatistic, usePagination, useTransactions } from '@app/hooks';

// HOCs
import {
  TWithTransaction,
  withErrorBoundary,
  withTransactions,
} from '@app/hocs';

// Types
import { TOption } from '@app/components/common/Select';
import { IEfficiency, TOverallBalance } from '@app/interfaces';

// Mocks
import { INITIAL_EFFICIENCY, INITIAL_OVERALL_BALANCE } from '@app/mocks';

// Lazy loading components
const TransactionTable = lazy(() => import('@app/components/TransactionTable'));
const CartPayment = lazy(() => import('@app/components/CartPayment'));
const Efficiency = lazy(() => import('@app/components/Efficiency'));
const TotalBalance = lazy(() => import('@app/components/TotalBalance'));
const OverallBalance = lazy(() => import('@app/components/OverallBalance'));

const MyWallet = ({
  controlInputTransaction,
  searchTransactionValue,
  onSearchTransaction,
}: TWithTransaction) => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);

  const { searchParam, handleChangeLimit, handleChangePage } = usePagination();
  // Query transactions
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
  } = useTransactions({
    limit: +searchParam.limit,
    pageParam: +searchParam.page,
    name: searchTransactionValue,
  });

  const transactionList = useMemo(() => {
    const start = (+searchParam.page - 1) * +searchParam.limit;
    const end = +searchParam.limit + start;

    return transactions.slice(start, end);
  }, [searchParam.page, transactions, searchParam.limit]);

  const {
    data: efficiencyData = INITIAL_EFFICIENCY,
    isLoading: isLoadingEfficiency,
    isError: isErrorEfficiency,
  } = useGetStatistic<IEfficiency>(
    `${END_POINTS.EFFICIENCY}/${efficiencyType}`,
  );

  const {
    data: overallBalanceData = INITIAL_OVERALL_BALANCE,
    isLoading: isLoadingOverallBalance,
    isError: isErrorOverallBalance,
  } = useGetStatistic<TOverallBalance>(END_POINTS.OVERALL_BALANCE);

  const handleChangeSelectEfficiency = useCallback((data: TOption) => {
    setEfficiencyType(data.value);
    setLoadingSelectEfficiencyType(true);
  }, []);

  return (
    <Grid
      bg="background.body.primary"
      px={{ base: 6, md: 12 }}
      py={12}
      templateColumns={{ base: 'repeat(1, 1fr)', '3xl': 'repeat(4, 1fr)' }}
      gap={{ base: 0, '2xl': 6 }}
      display={{ sm: 'block', md: 'grid' }}
      minH="100vh"
    >
      <GridItem colSpan={1}>
        <Flex w="full" direction="column" gap={6}>
          <Lazy>
            <TotalBalance />
            <CartPayment />
          </Lazy>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ xl: 3 }} mt={{ base: 6, '3xl': 0 }}>
        <Flex direction="column" gap={6}>
          <Flex
            gap={6}
            direction={{ base: 'column', xl: 'row' }}
            boxSizing="border-box"
          >
            <Box flex={2}>
              <Fetching
                isLoading={isLoadingOverallBalance}
                isError={isErrorOverallBalance}
                errorMessage="Overall Balance data error"
              >
                <Lazy>
                  <OverallBalance {...overallBalanceData} />
                </Lazy>
              </Fetching>
            </Box>
            <Box flex={1}>
              <Fetching
                isError={isErrorEfficiency}
                errorMessage="Efficiency data error"
              >
                <Lazy>
                  <Efficiency
                    {...efficiencyData}
                    isLoading={isLoadingEfficiency}
                    isLoadingWhenSelect={isLoadingSelectEfficiencyType}
                    onChangeSelect={handleChangeSelectEfficiency}
                  />
                </Lazy>
              </Fetching>
            </Box>
          </Flex>
          <Box>
            <Box
              as="section"
              bgColor="background.component.primary"
              borderRadius={8}
              px={6}
              py={5}
            >
              <Fetching
                isLoading={isLoadingTransactions}
                isError={isTransactionsError}
              >
                <SearchBar
                  control={controlInputTransaction}
                  onSearch={onSearchTransaction}
                />
                <Box mt={5}>
                  <Lazy>
                    <TransactionTable
                      transactions={transactionList}
                      onSort={sortBy}
                    />
                  </Lazy>
                </Box>
                <Box mt={8}>
                  <Pagination
                    pageSize={+searchParam.limit}
                    currentPage={+searchParam.page}
                    totalCount={transactions.length}
                    onLimitChange={handleChangeLimit}
                    onPageChange={handleChangePage}
                  />
                </Box>
              </Fetching>
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const MyWalletPage = memo(
  withErrorBoundary(withTransactions(MyWallet)),
  areEqual,
);

export default MyWalletPage;
