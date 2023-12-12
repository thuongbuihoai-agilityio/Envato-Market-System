import areEqual from 'react-fast-compare';
import { Suspense, lazy, memo } from 'react';
import { Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react';

// Components
import { Pagination, SearchBar, Fetching } from '@app/components';

// Constants
import { PAGE_SIZE } from '@app/constants/pagination';

// Hooks
import { useTransactions } from '@app/hooks';

// HOCs
import { TWithTransaction, withTransactions } from '@app/hocs';

// lazy loading components
const TransactionTable = lazy(() => import('@app/components/TransactionTable'));
const CartPayment = lazy(() => import('@app/components/CartPayment'));
const BoxChat = lazy(() => import('@app/components/BoxChat'));

const Transaction = ({
  searchTransactionValue,
  controlInputTransaction,
  onSearchTransaction,
}: TWithTransaction) => {
  // Query transactions
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
  } = useTransactions({
    name: searchTransactionValue,
  });

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
          mt={6}
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
              <Suspense fallback={<Spinner />}>
                <TransactionTable transactions={transactions} onSort={sortBy} />
              </Suspense>
            </Box>
            <Box mt={8}>
              <Pagination pageSize={PAGE_SIZE} totalCount={100} />
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

const TransactionPage = memo(withTransactions(Transaction), areEqual);

export default TransactionPage;
