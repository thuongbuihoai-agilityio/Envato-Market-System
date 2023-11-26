import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  sizes: {
    sm: {
      fontSize: 'md',
      py: 3,
    },
    md: {
      fontSize: 'md',
      py: 3.5,
    },
    lg: {
      fontSize: 'md',
      py: 4,
    },
  },
  variants: {
    solid: {
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: 'lg',
      backgroundColor: 'primary.500',
      _hover: {
        backgroundColor: 'primary.600',
      },
      _focus: {
        outline: 'none',
      },
    },
    outline: {
      color: 'gray.800',
      borderRadius: 'lg',
      borderColor: 'gray.300',
      backgroundColor: 'transparent',
      _hover: {
        backgroundColor: 'transparent',
        borderColor: 'gray.300',
        outline: 'none',
      },
      _focus: {
        outline: 'none',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'solid',
  },
});
