import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  baseStyle: {
    fontSize: 'md',
  },
  sizes: {
    sm: {
      py: 3,
      px: 7,
    },
    md: {
      py: 3,
      px: 10,
    },
    lg: {
      py: 3,
      px: 11,
    },
    xl: {
      py: 4,
      width: '100%',
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
      fontWeight: 'medium',
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
    size: 'xl',
    variant: 'solid',
  },
});
