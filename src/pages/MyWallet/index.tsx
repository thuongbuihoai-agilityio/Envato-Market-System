// Components
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import {
  CartPayment,
  Efficiency,
  FilterUser,
  OverallBalance,
  TotalBalance,
} from '@components/index';

// Mocks
import { EFFICIENCY_MOCK, OVERALL_BALANCE_MOCK } from '@mocks/index';

const MyWallet = () => (
  <Grid
    bg="background.body.primary"
    px={{ base: 6, md: 12 }}
    py={12}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    gap={{ base: 0, lg: 6 }}
    display={{ sm: 'block', md: 'grid' }}
  >
    <GridItem colSpan={1}>
      <Flex direction="column" gap={6}>
        <TotalBalance />
        <CartPayment />
      </Flex>
    </GridItem>
    <GridItem colSpan={{ '2xl': 3 }} mt={{ base: 6, lg: 0 }}>
      <Flex direction="column" gap={6}>
        <Flex gap={6} direction={{ base: 'column', xl: 'row' }}>
          <Box flex={1}>
            <OverallBalance {...OVERALL_BALANCE_MOCK} />
          </Box>
          <Efficiency {...EFFICIENCY_MOCK} isExchangeRate />
        </Flex>
        <Box>
          <FilterUser />
        </Box>
      </Flex>
    </GridItem>
  </Grid>
);

export default MyWallet;
