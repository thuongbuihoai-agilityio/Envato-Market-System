import { Box, Flex, Text } from '@chakra-ui/react';
import Benefit from '@components/common/Benefit';
import { IMAGES } from '@constants/images';
import { memo } from 'react';

const LoginPage = () =>  (
  <Flex width="100%">
    {/* TODO: Will update Form Sign in later*/}
    <Box w="50%">
      <Text>Form Sign in</Text>
    </Box>
    <Benefit imageURL={IMAGES.SIGN_IN.url} alt={IMAGES.SIGN_IN.alt} />
  </Flex>
);

const Login = memo(LoginPage);
export default Login;
