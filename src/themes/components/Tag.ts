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
        backgroundColor: 'background.component.tagPrimary',
      },
    },
    secondary: {
      container: {
        color: 'danger.500',
        backgroundColor: 'background.component.tagPrimary',
      },
    },
    tertiary: {
      container: {
        color: 'warning.800',
        backgroundColor: 'background.component.tagSecondary',
      },
    },
    quaternary: {
      container: {
        color: 'danger.500',
        backgroundColor: 'background.component.tagSecondary',
      },
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
});
