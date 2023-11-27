import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  baseStyle: {
    py: 3,
    borderRadius: 'lg',
    _focus: {
      outline: 'none',
    },
  },
  sizes: {
    xs: {
      py: 3.5,
      px: 4,
      fontSize: 'md',
    },
    sm: {
      px: 7,
      fontSize: 'md',
    },
    md: {
      px: 10,
      fontSize: 'md',
      borderRadius: 'xl',
    },
    lg: {
      px: 11,
      fontSize: 'md',
      borderRadius: 'xl',
    },
    xl: {
      py: 4,
      fontSize: 'md',
      width: '100%',
    },
  },
  variants: {
    solid: {
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      backgroundColor: 'primary.500',
      _hover: {
        backgroundColor: 'primary.600',
      },
    },
    outline: {
      color: 'gray.800',
      fontWeight: 'medium',
      borderColor: 'border.300',
      backgroundColor: 'transparent',
      _hover: {
        backgroundColor: 'transparent',
        borderColor: 'border.300',
        outline: 'none',
      },
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'solid',
  },
});
