import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

const TotalListSkeleton = () => (
  <Grid
    templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
    gap={6}
  >
    <GridItem>
      <Skeleton height={180} bg="background.component.primary" rounded="lg" />
    </GridItem>
    <GridItem>
      <Skeleton height={180} bg="background.component.primary" rounded="lg" />
    </GridItem>
    <GridItem>
      <Skeleton height={180} bg="background.component.primary" rounded="lg" />
    </GridItem>
  </Grid>
);

export default TotalListSkeleton;
