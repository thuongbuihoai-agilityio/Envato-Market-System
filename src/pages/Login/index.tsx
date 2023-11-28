import { memo } from 'react';
import { Box, Flex } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@constants/index';

// Components
import Benefit from '@components/common/Benefit';
import Logo from '@components/common/Logo';

const LoginPage = () => (
  <Flex width="100%">
    {/* TODO: Will update Form Sign in later*/}
    <Box w="50%" px={5}>
      <Box px={5} pt={10}>
        <Logo />
      </Box>
    </Box>
    <Benefit imageURL={IMAGES.SIGN_IN.url} alt={IMAGES.SIGN_IN.alt} />
  </Flex>
);

const Login = memo(LoginPage);
export default Login;
