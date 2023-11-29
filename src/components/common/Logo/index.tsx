import { Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Assets
import { LogoIcon } from '@assets/images/index';

// Constants
import { THEMES } from '@constants/index';

const Logo = () => {
  const { colorMode } = useColorMode();
  const colorFill = colorMode === THEMES.dark ? '#fff' : '#000';

  return (
    <Text as={Link} to="/" pl="48px" display="inline-block">
      <LogoIcon colorFill={colorFill} />
    </Text>
  );
};

export default Logo;
