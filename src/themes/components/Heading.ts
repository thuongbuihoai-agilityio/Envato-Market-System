import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'semibold',
    fontFamily: 'primary',
  },
  variants: {
    headingLg: {
      fontSize: 'lg',
      fontWeight: 'bold',
    },
    headingXl: {
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    heading2XL: {
      fontSize: '2xl',
    },
    heading3XL: {
      fontSize: '3xl',
      lineHeight: '9',
    },
    heading4XL: {
      fontSize: '4xl',
      lineHeight: '10',
    },
  },
  defaultProps: {
    variant: 'headingXl',
  },
});
