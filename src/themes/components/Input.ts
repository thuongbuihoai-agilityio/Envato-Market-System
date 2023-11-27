import { defineStyleConfig } from '@chakra-ui/react';

const FOCUS_COLOR = 'primary.600';
const NO_COLOR = 'transparent';
const COLOR_TEXT = 'secondary.450';
const BG_DARK_THEME = 'background.component.secondary';
const FW_MEDIUM = 'medium'; // FW_*: font-weight

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

  sizes: {
    sm: {
      field: {
        fontSize: 'sm',
      },
    },
    md: {
      field: {
        fontSize: 'md',
      },
    },
  },

  variants: {
    primary: {
      field: {
        fontWeight: FW_MEDIUM,
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
        fontWeight: FW_MEDIUM,
        color: COLOR_TEXT,
      },
    },

    authentication: {
      field: {
        borderColor: 'gray.200',
        color: 'gray.400',
        backgroundColor: NO_COLOR,
      },
    },
  },

  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
});
