import { useState } from 'react';

// Components
import { Box, Flex, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';
import { TOption } from '@components/common/Select';
import {
  CartPayment,
  Efficiency,
  OverallBalance,
  TotalBalance,
  TransactionTable,
} from '@components/index';
import { END_POINTS } from '@constants/api';

// Hooks
import { useGetStatistic, useTransaction } from '@hooks/index';
import { IEfficiency, IOverallBalance } from '@interfaces/index';

// Mocks
import { INITIAL_EFFICIENCY, INITIAL_OVERALL_BALANCE } from '@mocks/index';

const MyWallet = () => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);

  const { data: transactions = [] } = useTransaction();
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
                  isExchangeRate
                  isLoadingWhenSelect={isLoadingSelectEfficiencyType}
                  onChangeSelect={handleChangeSelectEfficiency}
                />
              )}
            </Box>
          </Flex>
          <Box>
            <TransactionTable transactions={transactions} />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default MyWallet;
