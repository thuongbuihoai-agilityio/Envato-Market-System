import { Box, Flex } from '@chakra-ui/react';
import Benefit from '@components/common/Benefit';
import { IMAGES } from '@constants/images';
import { memo } from 'react';

const LoginPage = () => {
  return (
    <Flex width="100%">
      <Box w="50%">
        <p>Form Sign</p>
      </Box>
      <Benefit url={IMAGES.signIn} />
    </Flex>
  );
};

const Login = memo(LoginPage);
export default Login;
