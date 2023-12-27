import { memo } from 'react';

// Components
import { Grid, GridItem } from '@chakra-ui/react';
import { TotalCard, TotalListSkeleton } from '@app/components';

// Types
import { ISpendingStatistics } from '@app/interfaces';

// Mocks
import { INITIAL_TOTAL_STATISTICS } from '@app/mocks';

interface TotalListComponentProps {
  spendingStatistics?: ISpendingStatistics[];
  isLoading?: boolean;
}

const TotalListComponent = ({
  spendingStatistics = INITIAL_TOTAL_STATISTICS,
  isLoading = false,
}: TotalListComponentProps) => {
  if (isLoading) return <TotalListSkeleton />;

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(3, 1fr)' }}
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
