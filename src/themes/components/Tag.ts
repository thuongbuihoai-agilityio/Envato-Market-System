import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Tag = defineStyleConfig({
  baseStyle: {
    border: 'none',
    borderRadius: 'lg',
    color: 'red',
    fontSize: '50px',
  },
  variants: {
    subtle: {
      container: {
        background: 'red.500',
      },
      colorScheme: 'red',
    },
    secondary: {
      color: 'danger.500',
      // backgroundColor: 'primary.400',
    },
    tertiary: {
      color: 'warning.800',
      // backgroundColor: 'warning.300',
    },
    quaternary: {
      color: 'danger.500',
      // backgroundColor: 'warning.300',
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'subtle',
    // colorScheme: "#000f",
  },
});
