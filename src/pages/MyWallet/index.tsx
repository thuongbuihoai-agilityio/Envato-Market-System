import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';

// Components
import {
  CartPayment,
  Efficiency,
  OverallBalance,
  Pagination,
  SearchBar,
  TableSkeleton,
  TotalBalance,
  TransactionTable,
} from '@components/index';
import { TSearchValue } from '@components/common/SearchBar';
import { TOption } from '@components/common/Select';

// Constants
import { END_POINTS, PAGE_SIZE } from '@constants/index';

// Hooks
import {
  TSearchTransaction,
  useDebounce,
  useGetStatistic,
  useSearch,
  useTransactions,
} from '@hooks/index';

// Types
import { IEfficiency, IOverallBalance } from '@interfaces/index';

// Mocks
import { INITIAL_EFFICIENCY, INITIAL_OVERALL_BALANCE } from '@mocks/index';

const MyWallet = () => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);

  // Search transactions
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
  } = useGetStatistic<IOverallBalance>(END_POINTS.OVERALL_BALANCE);

  const handleChangeSelectEfficiency = (data: TOption) => {
    setEfficiencyType(data.value);
    setLoadingSelectEfficiencyType(true);
  };

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
          <TotalBalance />
          <CartPayment />
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
              {isLoadingOverallBalance ? (
                <Skeleton
                  bg="background.component.primary"
                  rounded="lg"
                  height={360}
                />
              ) : isErrorOverallBalance ? (
                <Text>Overall Balance data error</Text>
              ) : (
                <OverallBalance {...overallBalanceData} />
              )}
            </Box>
            <Box flex={1}>
              {isErrorEfficiency ? (
                <Text>Efficiency data error</Text>
              ) : (
                <Efficiency
                  {...efficiencyData}
                  isLoading={isLoadingEfficiency}
                  isLoadingWhenSelect={isLoadingSelectEfficiencyType}
                  onChangeSelect={handleChangeSelectEfficiency}
                />
              )}
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
              {isLoadingTransaction ? (
                <TableSkeleton />
              ) : (
                <>
                  <SearchBar
                    control={control}
                    onSearch={handleDebounceSearch}
                  />
                  <Box mt={5}>
                    <TransactionTable transactions={transactions} />
                  </Box>
                  <Box mt={8}>
                    <Pagination pageSize={PAGE_SIZE} totalCount={100} />
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default MyWallet;
