import { Box, Flex } from '@chakra-ui/react';
import Benefit from '@components/common/Benefit';
import { IMAGES } from '@constants/images';
import { memo } from 'react';

const LoginPage = () => {
  return (
    <Flex width="100%">
      {/* TODO: Will update Form Sign in later*/}
      <Box w="50%">
        <p>Form Sign in</p>
      </Box>
      <Benefit url={IMAGES.signIn} alt={IMAGES.altSingIn} />
    </Flex>
  );
};

const Login = memo(LoginPage);
export default Login;
