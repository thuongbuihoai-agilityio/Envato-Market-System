import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import areEqual from 'react-fast-compare';
import { memo } from 'react';

// Components
import {
  BoxChat,
  CartPayment,
  HistoryTable,
  Pagination,
  SearchBar,
  Fetching,
} from '@components/index';

// Hooks
import { useTransactions } from '@hooks/index';

// HOCs
import { TWithTransaction, withTransactions } from '@hocs/index';

// Constants
import { PAGE_SIZE, TOTAL_COUNT } from '@constants/index';

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
              onSearch={onSearchTransaction}
            />

            {/* Table users */}
            <Box mt={5}>
              <HistoryTable histories={transactions} />
            </Box>

            <Box mt={8}>
              <Pagination pageSize={PAGE_SIZE} totalCount={TOTAL_COUNT} />
            </Box>
          </Fetching>
        </Box>
      </GridItem>
      <GridItem mt={{ base: 6, '2xl': 0 }}>
        <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
          <CartPayment />
          <BoxChat />
        </Flex>
      </GridItem>
    </Grid>
  );
};

const HistoryPage = memo(withTransactions(History), areEqual);

export default HistoryPage;
