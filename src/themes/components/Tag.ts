import { defineStyleConfig } from '@chakra-ui/react';

const backgroundPrimary = 'background.component.tagPrimary';
const backgroundSecondary = 'background.component.tagSecondary';

// The default style for Button component
export const Tag = defineStyleConfig({
  baseStyle: {
    border: 'none',
  },
  variants: {
    primary: {
      container: {
        color: 'primary.500',
        backgroundColor: backgroundPrimary,
      },
    },
    secondary: {
      container: {
        color: 'danger.500',
        backgroundColor: backgroundPrimary,
      },
    },
    tertiary: {
      container: {
        color: 'warning.800',
        backgroundColor: backgroundSecondary,
      },
    },
    quaternary: {
      container: {
        color: 'danger.500',
        backgroundColor: backgroundSecondary,
      },
    },
  },
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
});
