import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';

// Components
import {
  CartPayment,
  TotalList,
  BoxChat,
  Efficiency,
  RevenueFlow,
  TransactionTable,
  SearchBar,
  Pagination,
  Fetching,
} from '@components/index';
import { TSearchValue } from '@components/common/SearchBar';
import { TOption } from '@components/common/Select';

// Hooks
import {
  useGetStatistic,
  useTransactions,
  useDebounce,
  useSearch,
  TSearchTransaction,
} from '@hooks/index';

// Mocks
import {
  INITIAL_REVENUE_FLOW,
  INITIAL_TOTAL_STATISTICS,
  INITIAL_EFFICIENCY,
} from '@mocks/index';

// Constants
import { END_POINTS, PAGE_SIZE } from '@constants/index';

// Types
import {
  ISpendingStatistics,
  IRevenueFlow,
  IEfficiency,
} from '@interfaces/index';

const Dashboard = () => {
  const {
    searchParam: searchTransaction,
    setSearchParam: setSearchTransaction,
  } = useSearch<TSearchTransaction>({
    name: '',
  });

  // Form control for search
  const { control, getValues } = useForm<TSearchValue>({
    defaultValues: {
      search: searchTransaction.name,
    },
  });

  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);

  // Query transactions
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
  } = useTransactions({
    name: searchTransaction.name,
  });

  const {
    data: totalListData = [],
    isLoading: isLoadingTotalList,
    isError: isErrorTotalList,
  } = useGetStatistic<ISpendingStatistics[]>(END_POINTS.STATISTICS);

  const {
    data: revenueFlowData = INITIAL_REVENUE_FLOW,
    isLoading: isLoadingRevenueFlow,
    isError: isErrorRevenueFlow,
  } = useGetStatistic<IRevenueFlow[]>(END_POINTS.REVENUE);

  const {
    data: efficiencyData = INITIAL_EFFICIENCY,
    isLoading: isLoadingEfficiency,
    isError: isErrorEfficiency,
  } = useGetStatistic<IEfficiency>(
    `${END_POINTS.EFFICIENCY}/${efficiencyType}`,
  );

  const handleChangeSelectEfficiency = (data: TOption) => {
    setEfficiencyType(data.value);
    setLoadingSelectEfficiencyType(true);
  };

  // Update search params when end time debounce
  const handleDebounceSearch = useDebounce(
    () => setSearchTransaction('name', getValues().search),
    [],
  );

  return (
    <Grid
      display={{ sm: 'block', md: 'grid' }}
      bg="background.body.primary"
      p={{ base: 6, xl: 12 }}
      templateColumns={{ base: 'repeat(1, 1fr)', '3xl': 'repeat(4, 1fr)' }}
      gap={0}
    >
      <GridItem colSpan={3}>
        <Fetching
          isError={isErrorTotalList}
          errorMessage="Total statistic data error "
        >
          <TotalList
            spendingStatistics={totalListData || INITIAL_TOTAL_STATISTICS}
            isLoading={isLoadingTotalList}
          />
        </Fetching>

        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          mt={6}
          gap={6}
        >
          <GridItem colSpan={{ base: 3, xl: 2 }}>
            <Fetching
              isLoading={isLoadingRevenueFlow}
              isError={isErrorRevenueFlow}
              errorMessage="Revenue flow data error"
            >
              <RevenueFlow data={revenueFlowData} />
            </Fetching>
          </GridItem>
          <GridItem display={{ base: 'none', xl: 'block' }}>
            <Fetching
              isError={isErrorEfficiency}
              errorMessage="Efficiency data error"
            >
              <Efficiency
                {...efficiencyData}
                isLoading={isLoadingEfficiency}
                isLoadingWhenSelect={isLoadingSelectEfficiencyType}
                onChangeSelect={handleChangeSelectEfficiency}
              />
            </Fetching>
          </GridItem>
        </Grid>

        {/* Transactions table */}
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
            <SearchBar control={control} onSearch={handleDebounceSearch} />
            <Box mt={5}>
              <TransactionTable transactions={transactions} />
            </Box>
            <Box mt={8}>
              <Pagination pageSize={PAGE_SIZE} totalCount={100} />
            </Box>
          </Fetching>
        </Box>
      </GridItem>
      <GridItem mt={{ base: 6, '3xl': 0 }} ml={{ '2xl': 12 }}>
        <Stack
          direction={{ base: 'column', lg: 'row', '2xl': 'column' }}
          spacing={{ base: 6, lg: 0 }}
        >
          <Box w="full">
            <CartPayment />
          </Box>
          <Box
            w="full"
            mt={{ base: 6, md: 0, '2xl': 6 }}
            ml={{ lg: 6, '2xl': 0 }}
          >
            <BoxChat />
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
