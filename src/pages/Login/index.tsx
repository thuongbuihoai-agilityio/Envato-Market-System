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
import { withAuthenticationLayout } from '@app/hocs/withAuthentication';
import { withErrorBoundary } from '@app/hocs/withErrorBoundary';

// Constants
import { ROUTES, AUTH_SCHEMA } from '@app/constants';

// Components
import { InputField } from '@app/components';

// Utils
import { validatePassword } from '@app/utils/helpers';

type TLoginForm = {
  username: string;
  password: string;
  isRemember: boolean;
};

const Login = (): JSX.Element => {
  const { signIn } = useAuth();
  const redirect = useNavigate();

  // Control form
  const {
    control,
    formState: {
      errors: { root },
    },
    handleSubmit,
    watch,
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

  const isFillAllFields: boolean = !Object.entries(watch()).every(
    ([key, value]) => {
      if (key === 'isRemember') return true;

      return value;
    },
  );

  const isDisabledSubmitBtn: boolean = isSubmit || isFillAllFields;

  const renderPasswordIcon = useMemo((): JSX.Element => {
    const Icon = isShowPassword ? ViewIcon : ViewOffIcon;

    return (
      <Icon
        color="gray.400"
        w="25px"
        h="25px"
        cursor="pointer"
        onClick={onToggleShowPassword}
        aria-label="toggle-password"
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
        const { message } = error as Error;

        setError('root', { type: 'custom', message });
      } finally {
        setIsSubmit(false);
      }
    },
    [redirect, setError, signIn],
  );

  const handleClearRootError = useCallback(
    () => clearErrors('root'),
    [clearErrors],
  );

  return (
    <>
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
              onBlur={handleClearRootError}
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
              onBlur={handleClearRootError}
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
                aria-label="remember"
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
            aria-label="forgot password"
            color="text.textDollar"
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
          role="button"
          aria-label="Sign In"
          textTransform="capitalize"
          form="login-form"
          isDisabled={isDisabledSubmitBtn}
        >
          Sign In
        </Button>
      </Box>

      <Text fontWeight="medium" textAlign="center">
        Don&apos;t have an account?
        <Text
          as={Link}
          to={`/${ROUTES.REGISTER}`}
          aria-label="sign up"
          fontWeight="semibold"
          textDecoration="underline"
          ml={2}
        >
          Sign Up
        </Text>
      </Text>
    </>
  );
};

const LoginPage = memo(withErrorBoundary(withAuthenticationLayout(Login)));

export default LoginPage;
