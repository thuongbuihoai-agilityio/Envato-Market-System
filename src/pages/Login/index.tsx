import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Text,
  VStack,
  Checkbox,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler } from 'react-hook-form';

// Hooks
import { useForm, useAuth } from '@app/hooks';

// HOCs
import { withLogged } from '@app/hocs';

// Constants
import { ROUTES, AUTH_SCHEMA } from '@app/constants';

// Layouts
import { AuthLayout } from '@app/layouts';

// Components
import { InputField } from '@app/components';

// Utils
import { validatePassword } from '@app/utils/helpers';

type TLoginForm = {
  username: string;
  password: string;
  isRemember: boolean;
};

const LoginPage = (): JSX.Element => {
  const signIn = useAuth((state) => state.signIn);
  const redirect = useNavigate();

  // Control form
  const {
    control,
    formState: {
      errors: { root },
    },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm<TLoginForm>({
    defaultValues: {
      username: '',
      password: '',
      isRemember: false,
    },
  });

  // Control show/hide password
  const { isOpen: isShowPassword, onToggle: onToggleShowPassword } =
    useDisclosure();

  // Disable button when wait response from Server
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

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

  const handleSubmitForm: SubmitHandler<TLoginForm> = useCallback(
    async (data) => {
      setIsSubmit(true);
      try {
        const { username, password, isRemember } = data;

        await signIn({ email: username, password }, isRemember);
        redirect(ROUTES.ROOT);
      } catch (error) {
        const { message } = error as unknown as Error;

        setError('root', { type: 'custom', message });
      } finally {
        setIsSubmit(false);
      }
    },
    [redirect, setError, signIn],
  );

  return (
    <AuthLayout>
      <VStack
        id="login-form"
        as="form"
        gap={6}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Controller
          rules={AUTH_SCHEMA.EMAIL}
          control={control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              placeholder="Username or email"
              isError={!!error?.message}
              errorMessages={error?.message}
              isDisabled={isSubmit}
              {...field}
              onBlur={() => clearErrors('root')}
            />
          )}
        />

        <Controller
          rules={{ validate: validatePassword }}
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              type={isShowPassword ? 'text' : 'password'}
              variant="authentication"
              placeholder="Password"
              rightIcon={renderPasswordIcon}
              isError={!!error?.message}
              errorMessages={error?.message}
              isDisabled={isSubmit}
              {...field}
              onBlur={() => clearErrors('root')}
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
                position="relative"
              >
                <Text fontWeight="semibold">Remember me</Text>
              </Checkbox>
            )}
          />
          <Text
            as={Link}
            to={`/${ROUTES.FORGOT_PASSWORD}`}
            color="primary.500"
            fontWeight="semibold"
            textTransform="capitalize"
            textDecoration="underline"
          >
            forgot password?
          </Text>
        </HStack>
      </VStack>

      {/* Show API error */}
      <Box mb={7}>
        <Text color="red" textAlign="center" py={2} h={10}>
          {root?.message}
        </Text>
        <Button
          type="submit"
          textTransform="capitalize"
          form="login-form"
          isDisabled={isSubmit}
        >
          Sign In
        </Button>
      </Box>

      <Text fontWeight="medium" textAlign="center">
        Don&apos;t have an account?
        <Text
          as={Link}
          to={`/${ROUTES.REGISTER}`}
          fontWeight="semibold"
          textDecoration="underline"
          ml={2}
        >
          Sign Up
        </Text>
      </Text>
    </AuthLayout>
  );
};

const Login = memo(withLogged(LoginPage));
export default Login;
