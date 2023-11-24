// Libs
import { extendTheme } from '@chakra-ui/react';

// Metrics
import { radii, spaces } from './bases/metric';

// Bases theme
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from './bases';

export const configThemes = extendTheme({
  radii,
  spaces,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
});
