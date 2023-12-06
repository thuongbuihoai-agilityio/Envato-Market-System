import { ThemeOverride, ColorHues } from '@chakra-ui/react';

export const colors: ThemeOverride['colors'] &
  Record<string, Partial<ColorHues> & Record<number, string>> = {
  primary: {
    400: '#D9FBE6',
    500: '#22C55E',
    600: '#16A34A',
    800: '#27DA68',
    700: '#2A313C',
    900: '#B7FFD1',
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
    750: '#2A313C',
    800: '#edf2f7',
    850: '#E2E8F0',
    900: '#2563EB',
    950: '#4A5568',
    1000: '#E5E7EB',
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
      quaternary: {
        default: '#FFF',
        _dark: '#1D1E24',
      },
      quinary: {
        default: 'primary.400',
        _dark: '#23262B',
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
      tertiary: {
        default: 'gray.50',
        _dark: 'secondary.600',
      },
      select: {
        primary: {
          default: '#F7FAFC',
          _dark: '#23262B',
        },
        secondary: {
          default: '#FFF',
          _dark: '#1d1e25',
        },
        noBackground: {
          default: '#FFF',
          _dark: '#1d1e25',
        },
      },
      selectList: {
        default: '#FFF',
        _dark: '#23262B',
      },
    },
  },

  border: {
    primary: {
      default: '#E2E8F0',
      _dark: '#2A313C',
    },
    secondary: {
      default: '#F7F7F7',
      _dark: '#2A313C',
    },
    tertiary: {
      default: '#E2E8F0',
      _dark: '#2A313C',
    },

    quaternary: {
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

    tertiary: {
      default: '#A0AEC0',
      _dark: '#747681',
    },
    quaternary: {
      default: '#22C55E',
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
    800: '#f6a723',
  },
};
