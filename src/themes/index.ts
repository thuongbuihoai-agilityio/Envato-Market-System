// Libs
import { extendTheme } from '@chakra-ui/react';

// colors
import { colors } from './bases/colors';

// Metrics
import { radii, space, sizes } from './bases/metric';

// Bases theme
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './bases';

// Common components
import { Button } from './components';

export const configThemes = {
  ...extendTheme({
    radii,
    space,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    colors,
    sizes,
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
  components: {
    Button,
  },
};
