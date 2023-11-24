// Libs
import { extendTheme } from '@chakra-ui/react';

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
});
