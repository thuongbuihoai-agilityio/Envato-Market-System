import { FormEvent, memo, useCallback } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Layouts
import { AuthLayout } from '@layouts/index';

// Components
import { InputField } from '@components/index';

const RegisterPage = () => {
  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();
  const { isOpen: isShowConfirmPassword, onToggle: onShowConfirmPassword } =
    useDisclosure();

  const renderPasswordIcon = useCallback(
    (isCorrect: boolean, callback: typeof onShowPassword): JSX.Element => {
      const Icon = isCorrect ? ViewIcon : ViewOffIcon;

      return (
        <Icon
          color="gray.400"
          w="25px"
          h="25px"
          cursor="pointer"
          onClick={callback}
        />
      );
    },
    [],
  );

  return (
    <AuthLayout isSignInForm={false}>
      <VStack
        as="form"
        gap={4}
        mb={6}
        onSubmit={(e: FormEvent) => e.preventDefault()}
      >
        <HStack
          gap={{
            base: 4,
            md: 10,
          }}
          w="100%"
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
        >
          <InputField
            variant="authentication"
            placeholder="First name"
            onChange={() => {}} // TODO: Will update when API integrate
          />
          <InputField
            variant="authentication"
            placeholder="Last name"
            onChange={() => {}} // TODO: Will update when API integrate
          />
        </HStack>
        <InputField
          variant="authentication"
          placeholder="Email"
          onChange={() => {}} // TODO: Will update when API integrate
        />
        <InputField
          type="password"
          variant="authentication"
          placeholder="Password"
          rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
          onChange={() => {}} // TODO: Will update when API integrate
        />
        <InputField
          type="password"
          variant="authentication"
          placeholder="Confirm password"
          rightIcon={renderPasswordIcon(
            isShowConfirmPassword,
            onShowConfirmPassword,
          )}
          onChange={() => {}} // TODO: Will update when API integrate
        />
      </VStack>

      <Flex gap={3} my={7}>
        <Checkbox size="md" colorScheme="green" defaultChecked></Checkbox>
        <Text color="text.secondary" fontSize="md" flex={1}>
          By creating an account, you agreeing to our
          <Text as="span" color="text.primary">
            Privacy Policy
          </Text>
          , and
          <Text as="span" color="text.primary">
            Electronics Communication Policy.
          </Text>
        </Text>
      </Flex>

      <Button textTransform="capitalize" my={7}>
        Sign Un
      </Button>

      <Text fontWeight="medium" textAlign="center">
        Already have an account?
        <Text
          as={Link}
          to={ROUTES.REGISTER}
          fontWeight="semibold"
          textDecoration="underline"
        >
          Sign In
        </Text>
      </Text>
    </AuthLayout>
  );
};

const Register = memo(RegisterPage);
export default Register;
