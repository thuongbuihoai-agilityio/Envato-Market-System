import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

//Providers
import { ChakraProvider, QueryProvider } from '../src/providers';

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
      <QueryProvider>
        <BrowserRouter>
          <ChakraProvider>
            <Story />
          </ChakraProvider>
        </BrowserRouter>
      </QueryProvider>
    ),
  ],
};

export default preview;
