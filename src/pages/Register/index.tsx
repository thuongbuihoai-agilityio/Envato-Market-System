import { ChangeEvent, memo, useCallback } from 'react';
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
import { Controller, SubmitHandler } from 'react-hook-form';

// Hooks
import { useForm } from '@hooks/index';

// Constants
import { ROUTES } from '@constants/routers';
import { AUTH_SCHEMA } from '@constants/form';

// Layouts
import { AuthLayout } from '@layouts/index';

// Components
import { InputField } from '@components/index';

type TRegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAcceptPrivacyPolicy: boolean;
};

const RegisterPage = () => {
  const { control, handleSubmit, clearErrors } = useForm<TRegisterForm>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      isAcceptPrivacyPolicy: false,
    },
  });
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

  // TODO: Will be update when API ready
  const handleSubmitForm: SubmitHandler<TRegisterForm> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <AuthLayout isSignInForm={false}>
      <VStack
        as="form"
        gap={6}
        onSubmit={handleSubmit(handleSubmitForm)}
        id="register-form"
      >
        <HStack
          gap={{
            base: 6,
            md: 10,
          }}
          w="100%"
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
        >
          <Controller
            control={control}
            rules={AUTH_SCHEMA.FIRST_NAME}
            name="firstName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                variant="authentication"
                placeholder="First name"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={(data) => {
                  clearErrors('firstName'), field.onChange(data);
                }}
              />
            )}
          />
          <Controller
            control={control}
            rules={AUTH_SCHEMA.LAST_NAME}
            name="lastName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                variant="authentication"
                placeholder="Last name"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={(data) => {
                  clearErrors('lastName'), field.onChange(data);
                }}
              />
            )}
          />
        </HStack>

        <Controller
          control={control}
          rules={AUTH_SCHEMA.EMAIL}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              placeholder="Email"
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={(data) => {
                clearErrors('email'), field.onChange(data);
              }}
            />
          )}
        />

        <Controller
          control={control}
          rules={AUTH_SCHEMA.PASSWORD}
          name="password"
          render={({ field, fieldState: { error } }) => {
            const { message } = error || {};

            return (
              <InputField
                type={isShowPassword ? 'text' : 'password'}
                variant="authentication"
                placeholder="Password"
                rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
                {...field}
                isError={!!message}
                errorMessages={message}
                onChange={(data) => {
                  clearErrors('password'), field.onChange(data);
                }}
              />
            );
          }}
        />

        <Controller
          control={control}
          rules={AUTH_SCHEMA.CONFIRM_PASSWORD}
          name="confirmPassword"
          render={({ field, fieldState: { error } }) => (
            <InputField
              type={isShowConfirmPassword ? 'text' : 'password'}
              variant="authentication"
              placeholder="Confirm password"
              rightIcon={renderPasswordIcon(
                isShowConfirmPassword,
                onShowConfirmPassword,
              )}
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={(data) => {
                clearErrors('confirmPassword'), field.onChange(data);
              }}
            />
          )}
        />
        <Flex gap={3}>
          <Controller
            control={control}
            rules={AUTH_SCHEMA.AGREE_POLICY}
            name="isAcceptPrivacyPolicy"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Checkbox
                size="md"
                colorScheme="green"
                isChecked={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.checked)
                }
                {...(error && {
                  sx: {
                    '> span': {
                      borderColor: 'danger.400',
                    },
                  },
                })}
              ></Checkbox>
            )}
          />
          <Text color="text.secondary" fontSize="md" flex={1}>
            By creating an account, you&apos;re agreeing to our {''}
            <Text as="span" color="text.primary" cursor="pointer">
              Privacy Policy
            </Text>
            , and {''}
            <Text as="span" color="text.primary" cursor="pointer">
              Electronics Communication Policy.
            </Text>
          </Text>
        </Flex>
      </VStack>

      <Button
        type="submit"
        textTransform="capitalize"
        my={7}
        form="register-form"
      >
        Sign Up
      </Button>

      <Text fontWeight="medium" textAlign="center">
        Already have an account?
        <Text
          as={Link}
          to={`/${ROUTES.LOGIN}`}
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
