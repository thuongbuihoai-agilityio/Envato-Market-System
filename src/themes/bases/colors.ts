import { ThemeOverride } from '@chakra-ui/react';

export const colors: ThemeOverride['colors'] = {
  primary: {
    400: '#D9FBE6',
    500: '#22C55E',
    600: '#16A34A',
  },

  secondary: {
    100: '#F6FAFF',
    150: '#FAFAFA',
    200: '#F7FAFC',
    250: '#A0AEC0',
    300: '#969BA0',
    350: '#6B7280',
    400: '#1D1E24',
    450: '#718096',
    500: '#2D3748',
    550: '#23302B',
    600: '#23262B',
    650: '#1D0024',
    700: '#747681',
  },

  background: {
    body: {
      primary: {
        default: '#FAFAFA',
        _dark: '#23262B',
      },
      secondary: {
        default: '#FFF',
        _dark: '#23262B',
      },
      tertiary: {
        default: '#FAFAFA',
        _dark: '#151515',
      },
    },
    section: {
      primary: {
        default: '#F6FAFF',
        _dark: '#1D1E24',
      },
    },
    component: {
      primary: {
        default: '#FFF',
        _dark: '#1D1E24',
      },
      secondary: {
        default: '#F7FAFC',
        _dark: '#23262B',
      },
    },
  },

  border: {
    primary: {
      default: '#E2E8F0',
      _dark: '#2A313C',
    },
  },

  text: {
    primary: {
      default: '#1A202C',
      _dark: '#FFF',
    },
    secondary: {
      default: '#718096',
      _dark: '#FAFAFA',
    },
  },

  danger: {
    400: '#FF4747',
    500: '#DD3333',
  },

  warning: {
    300: '#FFFbeb',
    400: '#FDF9e9',
    500: '#EAB308',
    600: '#FDF9e9',
    700: '#FF784B',
  },

  success: {
    100: '#22c55e',
  },
};
