import { memo, useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Controller } from 'react-hook-form';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

import {
  Box,
  VStack,
  useDisclosure,
  Text,
  Button,
  useToast,
  Heading,
  FormControl,
  FormLabel,
  Flex,
  Image,
} from '@chakra-ui/react';

// Constants
import {
  AUTH_SCHEMA,
  ERROR_MESSAGES,
  IMAGES,
  SHOW_TIME,
  STATUS,
  SUCCESS_MESSAGES,
} from '@app/constants';

// Interfaces
import { TUserDetail } from '@app/interfaces';

// Hooks
import { useAuth, useForm, useUpdateUser } from '@app/hooks';

// Components
import { InputField } from '@app/components';
import { POSITION } from '@app/constants/position';

type TRegisterForm = Omit<TUserDetail, 'id' | 'createdAt'> & {
  newPassword: string;
};

const SecurityPage = () => {
  const { mutate: updateUser } = useUpdateUser();
  const { setUser } = useAuth();
  const toast = useToast();
  const {
    control,
    formState: {
      errors: { root },
    },
    watch,
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<TUserDetail & TRegisterForm>({
    defaultValues: {
      password: '',
      newPassword: '',
    },
    mode: 'onBlur',
  });

  const handleClearErrorMessage = useCallback(
    (field: keyof TRegisterForm, onChange: (value: string) => void) =>
      (data: string) => {
        clearErrors(field);
        onChange(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (updatedInfo: TUserDetail) => {
      updateUser(updatedInfo, {
        onSuccess: (response: AxiosResponse<TUserDetail>) => {
          const updatedUser: TUserDetail = response.data;
          setUser({ user: updatedUser });

          toast({
            title: SUCCESS_MESSAGES.UPDATE_SUCCESS.title,
            description: SUCCESS_MESSAGES.UPDATE_SUCCESS.description,
            status: STATUS.SUCCESS,
            duration: SHOW_TIME,
            isClosable: true,
            position: POSITION.TOP_RIGHT,
          });
          reset(updatedInfo);
        },
        onError: () => {
          toast({
            title: ERROR_MESSAGES.UPDATE_FAIL.title,
            description: ERROR_MESSAGES.UPDATE_FAIL.description,
            status: STATUS.ERROR,
            duration: SHOW_TIME,
            isClosable: true,
            position: POSITION.TOP_RIGHT,
          });
        },
      });
    },
    [updateUser, setUser, reset, toast],
  );

  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();

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

  const [isSubmit] = useState<boolean>(false);
  const isDisabledSubmitBtn: boolean =
    isSubmit || !Object.values(watch()).every((value) => value);

  return (
    <Flex w="full" gap={6} direction="row">
      <VStack
        mt={6}
        as="form"
        gap={6}
        onSubmit={handleSubmit(handleSubmitForm)}
        id="register-form"
        w="full"
        alignItems="flex-start"
      >
        <Box alignContent="start">
          <Heading
            as="h3"
            textTransform="capitalize"
            color="text.quinary"
            fontSize="2xl"
            fontWeight="bold"
            mb={3}
          >
            Password
          </Heading>
          <Text fontSize="14px" color="text.ternary">
            Change or view your password
          </Text>
        </Box>
        <Controller
          rules={AUTH_SCHEMA.PASSWORD}
          control={control}
          name="password"
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => {
            const { message } = error ?? {};

            return (
              <FormControl>
                <FormLabel
                  color="secondary.700"
                  fontWeight="medium"
                  fontSize="sm"
                  mb={3}
                >
                  Old password
                </FormLabel>
                <InputField
                  type={isShowPassword ? 'text' : 'password'}
                  variant="authentication"
                  rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
                  {...rest}
                  isError={!!message}
                  errorMessages={message}
                  isDisabled={isSubmit}
                  onChange={handleClearErrorMessage('password', onChange)}
                  aria-label="password"
                  role="textbox"
                />
              </FormControl>
            );
          }}
        />

        <Controller
          control={control}
          rules={AUTH_SCHEMA.PASSWORD}
          name="newPassword"
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl>
              <FormLabel
                color="secondary.700"
                fontWeight="medium"
                fontSize="sm"
                mb={3}
              >
                New password
              </FormLabel>
              <InputField
                type={isShowPassword ? 'text' : 'password'}
                variant="authentication"
                rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
                {...rest}
                isError={!!error}
                errorMessages={error?.message}
                isDisabled={isSubmit}
                onChange={handleClearErrorMessage('newPassword', onChange)}
              />
            </FormControl>
          )}
        />

        <Box mb={7} alignSelf="end">
          <Text color="red" textAlign="center" py={2} h={10}>
            {root?.message}
          </Text>
          <Flex>
            <Button
              type="submit"
              aria-label="btn-save-profile"
              px={4}
              textTransform="capitalize"
              form="register-form"
              isDisabled={isDisabledSubmitBtn}
              w="none"
            >
              Save Change
            </Button>
          </Flex>
        </Box>
      </VStack>
      <Image
        src={IMAGES.PASSWORD.url}
        alt={IMAGES.PASSWORD.alt}
        display={{ base: 'none', xl: 'block' }}
      />
    </Flex>
  );
};

const Security = memo(SecurityPage);
export default Security;
