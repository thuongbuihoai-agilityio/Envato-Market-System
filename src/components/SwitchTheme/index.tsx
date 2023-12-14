import { memo } from 'react';
import { ColorMode, useColorMode } from '@chakra-ui/react';

// Components
import { IconButton } from '..';

// Icons
import { DarkTheme, LightTheme } from '@app/assets/icons';

// Constants
import { THEMES } from '@app/constants';
import { colors } from '@app/themes/bases/colors';

const SwitchThemeComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const colorFill: Record<ColorMode, string> = {
    light: colors.text.primary.default,
    dark: colors.common.white,
  };

  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === THEMES.LIGHT ? (
        <LightTheme color={colorFill[colorMode]} />
      ) : (
        <DarkTheme color={colorFill[colorMode]} />
      )}
    </IconButton>
  );
};

const SwitchTheme = memo(SwitchThemeComponent);

export default SwitchTheme;
