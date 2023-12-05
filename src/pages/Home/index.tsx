// Components
import { Box, Grid, GridItem, Stack } from '@chakra-ui/react';
import {
  CartPayment,
  TotalList,
  BoxChat,
  Efficiency,
  RevenueFlow,
  FilterUser,
} from '@components/index';

// Constants
import {
  SPENDING_STATISTICS_MOCK,
  EFFICIENCY_MOCK,
  REVENUE_FLOW_MOCK,
} from '@mocks/spending';
import { TRANSACTIONS } from '@mocks/transaction';

const Dashboard = () => (
  <Grid
    display={{ sm: 'block', md: 'grid' }}
    bg="background.body.primary"
    p={{ base: 6, xl: 12 }}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    gap={{ base: 0 }}
  >
    <GridItem colSpan={3}>
      <TotalList spendingStatistics={SPENDING_STATISTICS_MOCK} />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(3, 1fr)' }}
        mt={6}
      >
        <GridItem colSpan={2} mr={{ '2xl': 2 }}>
          <RevenueFlow data={REVENUE_FLOW_MOCK} />
        </GridItem>
        <GridItem
          mt={{ base: 6, '2xl': 0 }}
          ml={{ '2xl': 4 }}
          display={{ base: 'none', xl: 'block' }}
        >
          <Efficiency {...EFFICIENCY_MOCK} />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <FilterUser transactions={TRANSACTIONS} />
      </Box>
    </GridItem>
    <GridItem mt={{ base: 6, '2xl': 0 }} ml={{ '2xl': 12 }}>
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

export default Dashboard;
