import { FormEvent, memo, useMemo } from 'react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, HStack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/index';

// Layouts
import { AuthLayout } from '@layouts/index';

// Components
import { InputField, Checkbox } from '@components/index';

const LoginPage = (): JSX.Element => {
  const { isOpen: isShowPassword, onToggle: onToggleShowPassword } =
    useDisclosure();

  const renderPasswordIcon = useMemo((): JSX.Element => {
    const Icon = isShowPassword ? ViewIcon : ViewOffIcon;

    return (
      <Icon
        color="gray.400"
        w="25px"
        h="25px"
        cursor="pointer"
        onClick={onToggleShowPassword}
      />
    );
  }, [isShowPassword, onToggleShowPassword]);

  return (
    <AuthLayout>
      <VStack
        as="form"
        gap={4}
        mb={6}
        onSubmit={(e: FormEvent) => e.preventDefault()}
      >
        <InputField
          variant="authentication"
          placeholder="Username or email"
          onChange={() => {}} // TODO: Will update when API integrate
        />
        <InputField
          type={isShowPassword ? 'text' : 'password'}
          variant="authentication"
          placeholder="Password"
          rightIcon={renderPasswordIcon}
          onChange={() => {}} // TODO: Will update when API integrate
        />
      </VStack>

      {/* Helpers */}
      <HStack justifyContent="space-between" w="100%">
        <Checkbox
          variant="round"
          onChange={
            () => {} // TODO: Will update when API integrate
          }
        >
          <Text fontWeight="semibold">Remember me</Text>
        </Checkbox>
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
};

const Login = memo(LoginPage);
export default Login;
