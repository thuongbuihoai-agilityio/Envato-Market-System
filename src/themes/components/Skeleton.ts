import { defineStyleConfig } from '@chakra-ui/react';

export const skeletonSizes: Record<
  'sm' | 'md' | 'lg',
  Record<string, number>
> = {
  sm: {
    h: 180,
  },
  md: {
    h: 320,
  },
  lg: {
    h: 390,
  },
};

export const Skeleton = defineStyleConfig({
  sizes: skeletonSizes,

  defaultProps: {
    size: 'sm',
  },
});
