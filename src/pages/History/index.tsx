import { Suspense, lazy, memo, useCallback } from 'react';
import { Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react';
import areEqual from 'react-fast-compare';

// Components
import { Pagination, SearchBar, Fetching } from '@app/components';

// Hooks
import { usePagination, useTransactions } from '@app/hooks';

// HOCs
import {
  TWithTransaction,
  withErrorBoundary,
  withTransactions,
} from '@app/hocs';

// Lazy loading components
const HistoryTable = lazy(() => import('@app/components/HistoryTable'));
const CartPayment = lazy(() => import('@app/components/CartPayment'));
const BoxChat = lazy(() => import('@app/components/BoxChat'));

const History = ({
  searchTransactionValue,
  controlInputTransaction,
  onSearchTransaction,
}: TWithTransaction) => {
  // History transactions
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
  } = useTransactions({
    name: searchTransactionValue,
  });

  const { data, filterData, handleChangeLimit, handleChangePage, handleSearchWithPagination } =
    usePagination(transactions);

    return (
    <Grid
      bg="background.body.primary"
      py={12}
      px={{ base: 6, xl: 12 }}
      templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
      display={{ sm: 'block', md: 'grid' }}
      gap={{ base: 0, '2xl': 12 }}
    >
      <GridItem colSpan={3}>
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
            {/* Filter bar */}
            <SearchBar
              control={controlInputTransaction}
              onSearch={() => handleSearchWithPagination(searchTransactionValue, onSearchTransaction)}
            />

            {/* Table users */}
            <Box mt={5}>
              <Suspense fallback={<Spinner />}>
                <HistoryTable histories={filterData} onSort={sortBy} />
              </Suspense>
            </Box>

            <Box mt={8}>
              <Pagination
                pageSize={data.limit}
                currentPage={data.currentPage}
                totalCount={transactions.length}
                onLimitChange={handleChangeLimit}
                onPageChange={handleChangePage}
              />
            </Box>
          </Fetching>
        </Box>
      </GridItem>
      <GridItem mt={{ base: 6, '2xl': 0 }}>
        <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
          <Suspense fallback={<Spinner />}>
            <CartPayment />
            <BoxChat />
          </Suspense>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const HistoryPage = memo(
  withErrorBoundary(withTransactions(History)),
  areEqual,
);

export default HistoryPage;
