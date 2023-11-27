import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'medium',
  },
  variants: {
    textXs: {
      fontSize: 'xs',
    },
    textSm: {
      fontSize: 'sm',
      color: 'text.secondary',
    },
    textMd: {
      fontSize: 'md',
    },
    textLg: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    variant: 'textMd',
  },
});
