import { memo } from 'react';
import { ViewOffIcon } from '@chakra-ui/icons';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/index';

// Layouts
import { AuthLayout } from '@layouts/index';

// Components
import { InputField } from '@components/index';

const LoginPage = () => (
  <AuthLayout isSignForm>
    <VStack as="form" gap={4} mb={6}>
      <InputField
        variant="authentication"
        placeholder="Username or email"
        onChange={() => {}} // TODO: Will update when API integrate
      />
      <InputField
        type="password"
        variant="authentication"
        placeholder="Password"
        rightIcon={
          <ViewOffIcon color="gray.400" w="25px" h="25px" cursor="pointer" />
        }
        onChange={() => {}} // TODO: Will update when API integrate
      />
    </VStack>

    {/* Helpers */}
    <HStack justifyContent="space-between" w="100%">
      <Text fontWeight="semibold">Remember me</Text>
      <Text
        as={Link}
        to={ROUTES.FORGOT_PASSWORD}
        color="primary.500"
        fontWeight="semibold"
        textTransform="capitalize"
        textDecoration="underline"
      >
        forgot password?
      </Text>
    </HStack>

    <Button textTransform="capitalize" my={7}>
      Sign In
    </Button>
    <Text fontWeight="medium" textAlign="center">
      Don&apos;t have an account?{' '}
      <Text
        as={Link}
        to={ROUTES.REGISTER}
        fontWeight="semibold"
        textDecoration="underline"
      >
        Sign Up
      </Text>
    </Text>
  </AuthLayout>
);

const Login = memo(LoginPage);
export default Login;
