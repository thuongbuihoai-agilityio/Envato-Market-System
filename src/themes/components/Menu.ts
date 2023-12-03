import { defineStyleConfig, ComponentStyleConfig } from '@chakra-ui/react';

export const Menu: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    button: {
      color: 'red',
    },
  },
  sizes: {
    button: {
      sm: {
        sm: {
          px: 3,
        },
        md: {
          px: 5,
        },
      },
    },
  },
});
