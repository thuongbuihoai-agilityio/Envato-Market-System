import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

//Providers
import { ChakraProvider } from '../src/providers';

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
        <ChakraProvider>
          <Story />
        </ChakraProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
