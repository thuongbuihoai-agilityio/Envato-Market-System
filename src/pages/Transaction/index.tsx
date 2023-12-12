import areEqual from 'react-fast-compare';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import {
  BoxChat,
  CartPayment,
  Pagination,
  SearchBar,
  Fetching,
  TransactionTable,
} from '@app/components';

// Hooks
import { usePagination, useTransactions } from '@app/hooks';

//
import { TWithTransaction, withTransactions } from '@app/hocs';
import { memo } from 'react';

const Transaction = ({
  searchTransactionValue,
  controlInputTransaction,
  onSearchTransaction,
}: TWithTransaction) => {
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
              <TransactionTable transactions={transactions} onSort={sortBy} />
            </Box>
            <Box mt={8}>
              <Pagination
                pageSize={+searchParam.limit}
                currentPage={+searchParam.page}
                totalCount={3}
                onLimitChange={handleChangeLimit}
                onPageChange={handleChangePage}
              />
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

const TransactionPage = memo(withTransactions(Transaction), areEqual);

export default TransactionPage;
