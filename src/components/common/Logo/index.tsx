import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Constants
import { IMAGES } from '@constants/index';

const Logo = () => (
  <Link to="/">
    <Image src={IMAGES.LOGO.url} alt={IMAGES.LOGO.alt} />
  </Link>
);

export default Logo;
