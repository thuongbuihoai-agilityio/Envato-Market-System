import { defineStyleConfig } from '@chakra-ui/react';

const FOCUS_COLOR = 'primary.600';
const NO_COLOR = 'transparent';
const COLOR_TEXT = 'secondary.450';
const BG_DARK_THEME = 'background.component.secondary';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      height: '56px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: NO_COLOR,
      fontFamily: 'inherit',
      borderRadius: 'lg',
      color: 'text.secondary',
      fontSize: 'sm',
      fontWeight: 'medium',
      backgroundColor: BG_DARK_THEME,
      _focus: {
        borderColor: FOCUS_COLOR,
      },
      _dark: {
        color: COLOR_TEXT,
        borderColor: BG_DARK_THEME,
        _focus: {
          borderColor: FOCUS_COLOR,
        },
      },
      _placeholder: {
        color: 'inherit',
      },
    },
  },

  variants: {
    primary: {
      field: {
        _placeholder: {
          fontWeight: 'semibold',
        },
        _light: {
          color: COLOR_TEXT,
          backgroundColor: 'secondary.150',
          borderColor: NO_COLOR,
          _focus: {
            borderColor: FOCUS_COLOR,
          },
        },
      },
    },
    secondary: {
      field: {
        color: COLOR_TEXT,
      },
    },

    authentication: {
      field: {
        borderColor: 'gray.200',
        color: 'gray.400',
        backgroundColor: NO_COLOR,
        fontSize: 'md',
      },
    },
  },

  defaultProps: {
    variant: 'primary',
  },
});
