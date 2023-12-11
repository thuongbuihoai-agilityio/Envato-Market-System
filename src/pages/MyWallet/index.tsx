import areEqual from 'react-fast-compare';
import { memo, useCallback, useState } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import {
  CartPayment,
  Efficiency,
  OverallBalance,
  Pagination,
  SearchBar,
  Fetching,
  TotalBalance,
  TransactionTable,
} from '@app/components';

// Constants
import { END_POINTS, PAGE_SIZE } from '@app/constants';

// Hooks
import { useGetStatistic, useTransactions } from '@app/hooks';

// HOCs
import { TWithTransaction, withTransactions } from '@app/hocs';

// Types
import { TOption } from '@app/components/common/Select';
import { IEfficiency, IOverallBalance } from '@app/interfaces';

// Mocks
import { INITIAL_EFFICIENCY, INITIAL_OVERALL_BALANCE } from '@app/mocks';

const MyWallet = ({
  controlInputTransaction,
  searchTransactionValue,
  onSearchTransaction,
}: TWithTransaction) => {
  const [efficiencyType, setEfficiencyType] = useState<string>('weekly');
  const [isLoadingSelectEfficiencyType, setLoadingSelectEfficiencyType] =
    useState<boolean>(false);

  // Query transactions
  const {
    data: transactions = [],
    isLoading: isLoadingTransactions,
    isError: isTransactionsError,
    sortBy,
  } = useTransactions({
    name: searchTransactionValue,
  });

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

  const handleChangeSelectEfficiency = useCallback((data: TOption) => {
    setEfficiencyType(data.value);
    setLoadingSelectEfficiencyType(true);
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
            <Box flex={2}>
              <Fetching
                isLoading={isLoadingOverallBalance}
                isError={isErrorOverallBalance}
                errorMessage="Overall Balance data error"
              >
                <OverallBalance {...overallBalanceData} />
              </Fetching>
            </Box>
            <Box flex={1}>
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
              <Fetching
                isLoading={isLoadingTransactions}
                isError={isTransactionsError}
              >
                <SearchBar
                  control={controlInputTransaction}
                  onSearch={onSearchTransaction}
                />
                <Box mt={5}>
                  <TransactionTable
                    transactions={transactions}
                    onSort={sortBy}
                  />
                </Box>
                <Box mt={8}>
                  <Pagination pageSize={PAGE_SIZE} totalCount={100} />
                </Box>
              </Fetching>
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const MyWalletPage = memo(withTransactions(MyWallet), areEqual);

export default MyWalletPage;
