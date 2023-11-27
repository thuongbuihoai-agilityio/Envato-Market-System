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

// Breakpoints
import { breakpoints } from './bases/breakpoints';

export const configThemes = {
  ...extendTheme({
    breakpoints,
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
};
