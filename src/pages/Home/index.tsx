// Components
import { Box, Grid, GridItem, Skeleton, Stack, Text } from '@chakra-ui/react';
import {
  CartPayment,
  TotalList,
  BoxChat,
  Efficiency,
  RevenueFlow,
  FilterUser,
} from '@components/index';

// Hooks
import { useGetStatistic, useTransaction } from '@hooks/index';

// Mocks
import {
  INITIAL_REVENUE_FLOW,
  INITIAL_TOTAL_STATISTICS,
  INITIAL_EFFICIENCY,
} from '@mocks/index';

// Constants
import { END_POINTS } from '@constants/index';

// Types
import {
  ISpendingStatistics,
  IRevenueFlow,
  IEfficiency,
} from '@interfaces/index';
import { useCallback, useState } from 'react';
import { TOption } from '@components/common/Select';

const Dashboard = () => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const { data: transactions = [] } = useTransaction();
  const {
    data: totalListData,
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

  const handleChangeSelectEfficiency = useCallback((data: TOption) => {
    setEfficiencyType(data.value);
  }, []);

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
            spendingStatistics={totalListData || INITIAL_TOTAL_STATISTICS}
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
              <RevenueFlow data={revenueFlowData} />
            )}
          </GridItem>
          <GridItem display={{ base: 'none', xl: 'block' }}>
            {isErrorEfficiency ? (
              <Text>Efficiency data error</Text>
            ) : (
              <Efficiency
                {...efficiencyData}
                isLoading={isLoadingEfficiency}
                onChangeSelect={handleChangeSelectEfficiency}
              />
            )}
          </GridItem>
        </Grid>
        <Box mt={6}>
          <FilterUser transactions={transactions} />
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
