import { Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import { BoxChat, CartPayment, FilterUser } from '@components/index';

// Mocks
import { TRANSACTIONS } from '@mocks/index';

const Transaction = () => (
  <Grid
    bg="background.body.primary"
    py={12}
    px={{ base: 6, '2xl': 12 }}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    display={{ sm: 'block', md: 'grid' }}
    gap={{ base: 0, lg: 12 }}
  >
    <GridItem colSpan={3}>
      <FilterUser transactions={TRANSACTIONS} />
    </GridItem>
    <GridItem mt={{ base: 6, lg: 0 }}>
      <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
        <CartPayment />
        <BoxChat />
      </Flex>
    </GridItem>
  </Grid>
);

export default Transaction;
