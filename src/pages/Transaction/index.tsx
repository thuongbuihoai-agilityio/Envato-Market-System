import { useForm } from 'react-hook-form';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import {
  BoxChat,
  CartPayment,
  Pagination,
  SearchBar,
  TableSkeleton,
  TransactionTable,
} from '@components/index';
import { TSearchValue } from '@components/common/SearchBar';

// Constants
import { PAGE_SIZE } from '@constants/pagination';

// Hooks
import {
  TSearchTransaction,
  useDebounce,
  useSearch,
  useTransactions,
} from '@hooks/index';

const Transaction = () => {
  const {
    searchParam: searchTransaction,
    setSearchParam: setSearchTransaction,
  } = useSearch<TSearchTransaction>({
    name: '',
  });

  // Query transactions
  const { data: transactions = [], isLoading: isLoadingTransaction } =
    useTransactions({
      name: searchTransaction.name,
    });

  // Form control for search
  const { control, getValues } = useForm<TSearchValue>({
    defaultValues: {
      search: searchTransaction.name,
    },
  });

  // Update search params when end time debounce
  const handleDebounceSearch = useDebounce(
    () => setSearchTransaction('name', getValues().search),
    [],
  );

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
          {isLoadingTransaction ? (
            <TableSkeleton />
          ) : (
            <>
              <SearchBar control={control} onSearch={handleDebounceSearch} />
              <Box mt={5}>
                <TransactionTable transactions={transactions} />
              </Box>
              <Box mt={8}>
                <Pagination pageSize={PAGE_SIZE} totalCount={100} />
              </Box>
            </>
          )}
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

export default Transaction;
