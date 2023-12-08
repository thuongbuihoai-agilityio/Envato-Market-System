import { Skeleton as SkeletonChakra } from '@chakra-ui/react';

const TableSkeleton = (): JSX.Element => (
  <SkeletonChakra h={390} bg="background.component.primary" rounded="lg" />
);

export default TableSkeleton;
