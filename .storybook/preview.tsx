import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Story />
        </ChakraProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
