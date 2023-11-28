import { Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Constants
import { IMAGES } from '@constants/index';

const Logo = () => (
  <Text as={Link} to="/" pl="48px" display="inline-block">
    <Image src={IMAGES.LOGO.url} alt={IMAGES.LOGO.alt} />
  </Text>
);

export default Logo;
