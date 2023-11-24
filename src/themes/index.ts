// Libs
import { extendTheme } from '@chakra-ui/react';

// colors
import { colors } from './bases/colors';

// Bases theme
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './bases';

export const configThemes = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
});
