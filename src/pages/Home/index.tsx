// Components
import { Box, Grid, GridItem, Skeleton, Stack, Text } from '@chakra-ui/react';
import {
  CartPayment,
  TotalList,
  BoxChat,
  Efficiency,
  RevenueFlow,
  TransactionTable,
} from '@components/index';

// Hooks
import { useGetStatistic, useTransaction } from '@hooks/index';

// Mocks
import {
  EFFICIENCY_MOCK,
  INITIAL_REVENUE_FLOW,
  INITIAL_TOTAL_STATISTICS,
} from '@mocks/index';

// Constants
import { END_POINTS } from '@constants/index';

// Types
import { ISpendingStatistics, IRevenueFlow } from '@interfaces/index';

const Dashboard = () => {
  const { data: transactions = [] } = useTransaction();
  const {
    data: TotalListData,
    isLoading: isLoadingTotalList,
    isError: isErrorTotalList,
  } = useGetStatistic<ISpendingStatistics[]>(END_POINTS.STATISTICS);

  const {
    data: RevenueFlowData,
    isLoading: isLoadingRevenueFlow,
    isError: isErrorRevenueFlow,
  } = useGetStatistic<IRevenueFlow[]>(END_POINTS.REVENUE);

  return (
    <Grid
      display={{ sm: 'block', md: 'grid' }}
      bg="background.body.primary"
      p={{ base: 6, xl: 12 }}
      templateColumns={{ base: 'repeat(1, 1fr)', '3xl': 'repeat(4, 1fr)' }}
      gap={0}
    >
      <GridItem colSpan={3}>
        {isErrorTotalList ? (
          <Text>Total statistic data error </Text>
        ) : (
          <TotalList
            spendingStatistics={TotalListData || INITIAL_TOTAL_STATISTICS}
            isLoading={isLoadingTotalList}
          />
        )}
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          mt={6}
          gap={6}
        >
          <GridItem colSpan={{ base: 3, xl: 2 }}>
            {isLoadingRevenueFlow ? (
              <Skeleton
                bg="background.component.primary"
                rounded="lg"
                height={300}
              />
            ) : isErrorRevenueFlow ? (
              <Text>Revenue flow data error</Text>
            ) : (
              <RevenueFlow data={RevenueFlowData || INITIAL_REVENUE_FLOW} />
            )}
          </GridItem>
          <GridItem display={{ base: 'none', xl: 'block' }}>
            <Efficiency {...EFFICIENCY_MOCK} />
          </GridItem>
        </Grid>
        <Box mt={6}>
          <TransactionTable transactions={transactions} />
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
