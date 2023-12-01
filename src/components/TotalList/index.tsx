import { memo } from 'react';

// Components
import { Grid, GridItem, Skeleton } from '@chakra-ui/react';
import { ISpendingStatistics } from '@interfaces/index';
import { TotalCard } from '..';

interface TotalListComponentProps {
  spendingStatistics: ISpendingStatistics[];
  isLoading?: boolean;
}

const TotalListComponent = ({
  spendingStatistics,
  isLoading = false,
}: TotalListComponentProps) => {
  if (isLoading)
    return (
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        <GridItem>
          <Skeleton
            height={180}
            bg="background.component.primary"
            rounded="lg"
          />
        </GridItem>
        <GridItem>
          <Skeleton
            height={180}
            bg="background.component.primary"
            rounded="lg"
          />
        </GridItem>
        <GridItem>
          <Skeleton
            height={180}
            bg="background.component.primary"
            rounded="lg"
          />
        </GridItem>
      </Grid>
    );

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={6}
    >
      {spendingStatistics.map(
        ({ title, total, growth, weeklyIncome }: ISpendingStatistics) => (
          <GridItem key={title}>
            <TotalCard
              title={title}
              total={total}
              growth={growth}
              weeklyIncome={weeklyIncome}
            />
          </GridItem>
        ),
      )}
    </Grid>
  );
};

const TotalList = memo(TotalListComponent);

export default TotalList;
