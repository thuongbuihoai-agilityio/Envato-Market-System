import { memo } from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import {
  CartPayment,
  Efficiency,
  FilterUser,
  OverallBalance,
  TotalBalance,
} from '@components/index';
import { EFFICIENCY_MOCK, OVERALL_BALANCE_MOCK } from '@mocks/spending';

const MyWalletPage = () => (
  <Grid
    bg="background.body.primary"
    p={12}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    gap={{ base: 0, lg: 6 }}
  >
    <GridItem colSpan={1}>
      <Flex direction="column" gap={6}>
        <TotalBalance />
        <CartPayment />
      </Flex>
    </GridItem>
    <GridItem colSpan={3} mt={{ base: 6, lg: 0 }}>
      <Flex direction="column" gap={6}>
        <Flex gap={6} direction={{ base: 'column', xl: 'row' }}>
          <Box flex={1}>
            <OverallBalance {...OVERALL_BALANCE_MOCK} />
          </Box>
          <Efficiency {...EFFICIENCY_MOCK} />
        </Flex>
        <FilterUser />
      </Flex>
    </GridItem>
  </Grid>
);

const MyWallet = memo(MyWalletPage);
export default MyWallet;
