// Components
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
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

const Dashboard = () => (
  <Grid
    bg="background.body.primary"
    p={12}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    gap={{ base: 0, lg: 6 }}
  >
    <GridItem colSpan={3}>
      <TotalList spendingStatistics={SPENDING_STATISTICS_MOCK} />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(3, 1fr)' }}
        gap={6}
        mt={6}
      >
        <GridItem colSpan={2}>
          <RevenueFlow data={REVENUE_FLOW_MOCK} />
        </GridItem>
        <GridItem display={{ base: 'none', xl: 'block' }}>
          <Efficiency {...EFFICIENCY_MOCK} />
        </GridItem>
      </Grid>
      <Box mt={6}>
        <FilterUser />
      </Box>
    </GridItem>
    <GridItem>
      <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
        <CartPayment />
        <BoxChat />
      </Flex>
    </GridItem>
  </Grid>
);

export default Dashboard;
