import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Text,
  VStack,
  Checkbox,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Constants
import { ROUTES, AUTH_SCHEMA } from '@constants/index';

// Layouts
import { AuthLayout } from '@layouts/index';

// Components
import { InputField } from '@components/index';

type TLoginForm = {
  username: string;
  password: string;
  isRemember: boolean;
};

const LoginPage = (): JSX.Element => {
  const { control, handleSubmit } = useForm<TLoginForm>({
    defaultValues: {
      username: '',
      password: '',
      isRemember: false,
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
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

  // TODO: Will be update when API ready
  const handleSubmitForm: SubmitHandler<TLoginForm> = useCallback(() => {}, []);

  return (
    <AuthLayout>
      <VStack
        as="form"
        gap={6}
        onSubmit={handleSubmit(handleSubmitForm)}
        id="login-form"
      >
        <Controller
          rules={AUTH_SCHEMA.EMAIL}
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              placeholder="Username or email"
              {...field}
              isError={!!error?.message}
              errorMessages={error?.message}
            />
          )}
        />
        <Controller
          rules={AUTH_SCHEMA.PASSWORD}
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              type={isShowPassword ? 'text' : 'password'}
              variant="authentication"
              placeholder="Password"
              rightIcon={renderPasswordIcon}
              {...field}
              isError={!!error?.message}
              errorMessages={error?.message}
            />
          )}
        />

        {/* Helpers */}
        <HStack justifyContent="space-between" w="100%" mt={6}>
          <Controller
            control={control}
            name="isRemember"
            render={({ field: { value, onChange } }) => (
              <Checkbox
                variant="round"
                isChecked={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.checked)
                }
              >
                <Text fontWeight="semibold">Remember me</Text>
              </Checkbox>
            )}
          />
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
      </VStack>

      <Button type="submit" textTransform="capitalize" my={7} form="login-form">
        Sign In
      </Button>
      <Text fontWeight="medium" textAlign="center">
        Don&apos;t have an account?{' '}
        <Text
          as={Link}
          to={`/${ROUTES.REGISTER}`}
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
