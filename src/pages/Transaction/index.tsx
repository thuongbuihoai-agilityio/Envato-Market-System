import { memo, Suspense, lazy } from 'react';
import areEqual from 'react-fast-compare';
import { Box, Flex, Grid, GridItem, Spinner } from '@chakra-ui/react';

// HOCs
import {
  TWithTransaction,
  withErrorBoundary,
  withTransactions,
} from '@app/hocs';

// lazy loading components
const TransactionTable = lazy(() => import('@app/components/TransactionTable'));
const CartPayment = lazy(() => import('@app/components/CartPayment'));
const BoxChat = lazy(() => import('@app/components/BoxChat'));

const Transaction = ({
  searchTransactionValue,
  controlInputTransaction,
  onSearchTransaction,
}: TWithTransaction) => (
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
        <TransactionTable
          controlInputTransaction={controlInputTransaction}
          searchTransactionValue={searchTransactionValue}
          onSearchTransaction={onSearchTransaction}
        />
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

const TransactionPage = memo(
  withErrorBoundary(withTransactions(Transaction)),
  areEqual,
);

export default TransactionPage;
