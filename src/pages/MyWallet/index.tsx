import isEqual from 'react-fast-compare';
import { lazy, memo } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import { Fetching, Lazy } from '@app/components';

// Constants
import { END_POINTS } from '@app/constants';

// Hooks
import { useGetStatistic } from '@app/hooks';

// HOCs
import { withErrorBoundary } from '@app/hocs/withErrorBoundary';

// Types

import { TOverallBalance } from '@app/interfaces';

// Mocks
import { INITIAL_OVERALL_BALANCE } from '@app/mocks';

// Lazy loading components
const TransactionTable = lazy(() => import('@app/components/TransactionTable'));
const CardPayment = lazy(() => import('@app/components/CardPayment'));
const Efficiency = lazy(() => import('@app/components/Efficiency'));
const TotalBalance = lazy(() => import('@app/components/TotalBalance'));
const OverallBalance = lazy(() => import('@app/components/OverallBalance'));

const MyWallet = () => {
  const {
    data: overallBalanceData = INITIAL_OVERALL_BALANCE,
    isLoading: isLoadingOverallBalance,
    isError: isErrorOverallBalance,
  } = useGetStatistic<TOverallBalance>(END_POINTS.OVERALL_BALANCE);
  return (
    <Grid
      bg="background.body.primary"
      px={{ base: 6, md: 12 }}
      py={12}
      templateColumns={{ base: 'repeat(1, 1fr)', '3xl': 'repeat(4, 1fr)' }}
      gap={{ base: 0, '2xl': 6 }}
      display={{ sm: 'block', xl: 'grid' }}
      minH="100vh"
    >
      <GridItem colSpan={1}>
        <Flex w="full" direction="column" gap={6}>
          <Lazy>
            <TotalBalance />
            <CardPayment />
          </Lazy>
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
                variant="secondary"
                size="md"
              >
                <Lazy>
                  <OverallBalance {...overallBalanceData} />
                </Lazy>
              </Fetching>
            </Box>
            <Box flex={1}>
              <Lazy>
                <Efficiency />
              </Lazy>
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
              <TransactionTable isOpenModal />
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const MyWalletPage = memo(withErrorBoundary(MyWallet), isEqual);

export default MyWalletPage;
