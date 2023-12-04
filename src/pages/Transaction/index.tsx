import { Flex, Grid, GridItem } from '@chakra-ui/react';
import FilterUser from '@components/FilterUser';
import { BoxChat, CartPayment } from '@components/index';
import { memo } from 'react';

const TransactionPage = () => (
  <Grid
    bg="background.body.primary"
    p={12}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    gap={{ base: 0, lg: 6 }}
  >
    <GridItem colSpan={3}>
      <FilterUser />
    </GridItem>
    <GridItem>
      <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
        <CartPayment />
        <BoxChat />
      </Flex>
    </GridItem>
  </Grid>
);

const Transaction = memo(TransactionPage);
export default Transaction;
