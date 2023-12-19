import { ReactElement, memo } from 'react';
import { ColorMode, useColorMode } from '@chakra-ui/react';

// Components
import { IconButton } from '@app/components';

// Icons
import { DarkTheme, LightTheme } from '@app/components/Icons';

// Themes
import { colors } from '@app/themes/bases/colors';

const SwitchThemeComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icons: Record<ColorMode, ReactElement> = {
    light: <LightTheme color={colors.text.primary.default} />,
    dark: <DarkTheme color={colors.common.white} />,
  };

  return <IconButton onClick={toggleColorMode}>{icons[colorMode]}</IconButton>;
};

const SwitchTheme = memo(SwitchThemeComponent);

export default SwitchTheme;
