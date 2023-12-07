// Components
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { TOption } from '@components/common/Select';
import {
  CartPayment,
  Efficiency,
  FilterUser,
  OverallBalance,
  TotalBalance,
} from '@components/index';
import { END_POINTS } from '@constants/api';

// Hooks
import { useGetStatistic, useTransaction } from '@hooks/index';
import { IEfficiency } from '@interfaces/index';

// Mocks
import { INITIAL_EFFICIENCY, OVERALL_BALANCE_MOCK } from '@mocks/index';
import { useCallback, useState } from 'react';

const MyWallet = () => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const { data: transactions = [] } = useTransaction();
  const {
    data: efficiencyData,
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
            <Box>
              <OverallBalance {...OVERALL_BALANCE_MOCK} />
            </Box>
            <Box flex={1}>
              {isErrorEfficiency ? (
                <Text>Efficiency data error</Text>
              ) : (
                <Efficiency
                  {...(efficiencyData || INITIAL_EFFICIENCY)}
                  isLoading={isLoadingEfficiency}
                  isExchangeRate
                  onChangeSelect={handleChangeSelectEfficiency}
                />
              )}
            </Box>
          </Flex>
          <Box>
            <FilterUser transactions={transactions} />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default MyWallet;
