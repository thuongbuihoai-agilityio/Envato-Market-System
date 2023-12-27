import { memo, lazy } from 'react';
import isEqual from 'react-fast-compare';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

// HOCs
import { withErrorBoundary } from '@app/hocs/withErrorBoundary';
import { Lazy } from '@app/components';

// lazy loading components
const TransactionTable = lazy(() => import('@app/components/TransactionTable'));
const CardPayment = lazy(() => import('@app/components/CardPayment'));
const BoxChat = lazy(() => import('@app/components/BoxChat'));

const Transaction = () => (
  <Grid
    bg="background.body.primary"
    py={12}
    px={{ base: 6, xl: 12 }}
    templateColumns={{ base: 'repeat(1, 1fr)', '2xl': 'repeat(4, 1fr)' }}
    display={{ sm: 'block', md: 'grid' }}
    gap={{ base: 0, '2xl': 12 }}
  >
    <GridItem colSpan={3}>
      <Box
        as="section"
        bgColor="background.component.primary"
        borderRadius={8}
        px={6}
        py={5}
      >
        <TransactionTable />
      </Box>
    </GridItem>
    <GridItem mt={{ base: 6, '2xl': 0 }}>
      <Flex direction={{ base: 'column', lg: 'row', xl: 'column' }} gap={6}>
        <Lazy>
          <CardPayment />
          <BoxChat />
        </Lazy>
      </Flex>
    </GridItem>
  </Grid>
);

const TransactionPage = memo(withErrorBoundary(Transaction), isEqual);

export default TransactionPage;
