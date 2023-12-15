import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';

//Providers
import { ChakraProvider, QueryProvider } from '../src/providers';

interface ColorModeProps {
  colorMode: 'light' | 'dark';
  children: JSX.Element;
}

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode]);

  return props.children;
}

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
    (Story, context) => (
      <QueryProvider>
        <BrowserRouter>
          <ChakraProvider>
            <ColorMode colorMode={context.globals.colorMode}>
              <Story />
            </ColorMode>
          </ChakraProvider>
        </BrowserRouter>
      </QueryProvider>
    ),
  ],
};

export const globalTypes = {
  colorMode: {
    name: 'Color Mode',
    defaultValue: 'light',
    toolbar: {
      items: [
        { title: 'Light', value: 'light' },
        { title: 'Dark', value: 'dark' },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
