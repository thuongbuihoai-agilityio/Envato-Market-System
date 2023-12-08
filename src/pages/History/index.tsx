import { memo } from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import { BoxChat, CartPayment, HistoryTable } from '@components/index';

// Hooks
import { useTransaction } from '@hooks/useTransaction';

const HistoryPage = () => {
  const { data: transactions = [] } = useTransaction();

  return (
    <Grid
      bg="background.body.primary"
      py={12}
      px={{ base: 6, xl: 12 }}
      templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
      display={{ sm: 'block', md: 'grid' }}
      gap={{ base: 0, '2xl': 12 }}
    >
      <GridItem colSpan={3}>
        <HistoryTable histories={transactions} />
      </GridItem>
      <GridItem mt={{ base: 6, '2xl': 0 }}>
        <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
          <CartPayment />
          <BoxChat />
        </Flex>
      </GridItem>
    </Grid>
  );
};

const History = memo(HistoryPage);
export default History;
