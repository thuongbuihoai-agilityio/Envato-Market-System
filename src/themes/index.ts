// Libs
import { extendTheme } from '@chakra-ui/react';

// Bases theme
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './bases';
// colors
import { colors } from './bases/colors';
// Metrics
import { radii, sizes, space } from './bases/metric';
// Components
import {
  Tag,
  Button,
  Checkbox,
  Drawer,
  FormError,
  Heading,
  Input,
  Text,
} from './components';
import { breakpoints } from './bases/breakpoints';

export const configThemes = {
  ...extendTheme({
    semanticTokens: {
      radii,
      space,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      colors,
      sizes,
    },
    breakpoints,
    components: {
      Tag,
      Text,
      Button,
      Checkbox,
      Heading,
      Input,
      FormError,
      Drawer,
    },
  }),
  styles: {
    global: {
      'html, body': {
        fontFamily: 'primary',
      },
    },
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
};
