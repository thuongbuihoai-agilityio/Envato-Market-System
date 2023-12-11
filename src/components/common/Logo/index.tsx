import { Text, useColorModeValue, theme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Assets
import { LogoIcon } from '@app/assets/images';

const Logo = () => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  return (
    <Text as={Link} to="/" display="inline-block">
      <LogoIcon colorFill={colorFill} />
    </Text>
  );
};

export default Logo;
