import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Tag = defineStyleConfig({
  baseStyle: {
    border: 'none',
  },
  variants: {
    primary: {
      container: {
        color: 'primary.500',
        background: 'primary.400',
      },
    },
    secondary: {
      container: {
        color: 'danger.500',
        backgroundColor: 'primary.400',
      },
    },
    tertiary: {
      container: {
        color: 'warning.800',
        backgroundColor: 'warning.300',
      },
    },
    quaternary: {
      container: {
        color: 'danger.500',
        backgroundColor: 'warning.300',
      },
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
});
