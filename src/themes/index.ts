import { Button } from './components/Button';
// Libs
import { extendTheme } from '@chakra-ui/react';

// colors
import { colors } from './bases/colors';

// Metrics
import { radii, space } from './bases/metric';

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
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  components: {
    Button,
  },
});
