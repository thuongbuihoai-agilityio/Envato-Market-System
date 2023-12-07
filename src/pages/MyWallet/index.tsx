// Components
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import {
  CartPayment,
  Efficiency,
  FilterUser,
  OverallBalance,
  TotalBalance,
} from '@components/index';

// Hooks
import { useTransaction } from '@hooks/index';

// Mocks
import { EFFICIENCY_MOCK, OVERALL_BALANCE_MOCK } from '@mocks/index';

const MyWallet = () => {
  const { data: transactions = [] } = useTransaction();

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
              <Efficiency {...EFFICIENCY_MOCK} isExchangeRate />
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
