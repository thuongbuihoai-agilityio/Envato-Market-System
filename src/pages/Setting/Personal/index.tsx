import { memo, useCallback, useState } from 'react';
import { AxiosResponse } from 'axios';

import {
  HStack,
  VStack,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  Flex,
  useToast,
} from '@chakra-ui/react';

// Hooks
import { Controller, useForm } from 'react-hook-form';

// Interfaces
import { TUserDetail } from '@app/interfaces';

// Hooks
import { useAuth } from '@app/hooks';
import { useUpdateUser } from '@app/hooks/useUser';

// Constants
import { AUTH_SCHEMA } from '@app/constants/form';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@app/constants';

// Components
import { InputField, UpdateProfile } from '@app/components';

// Stores
import { authStore } from '@app/stores';

const UserFormComponent = () => {
  // TODO: will update integrate later
  const [isSubmit] = useState<boolean>(false);
  const { setUser } = useAuth();
  const user = authStore((state) => state.user);
  const { mutate: updateUser } = useUpdateUser();
  const toast = useToast();

  const {
    control,
    setValue,
    formState: {
      errors: { root },
      isValid,
    },
    clearErrors,
    handleSubmit,

    watch,
  } = useForm<TUserDetail>({
    defaultValues: {
      id: user?.id,
      avatarURL: user?.avatarURL,
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phoneNumber: user?.phoneNumber,
      country: user?.country,
      city: user?.city,
      address: user?.address,
      postalCode: user?.postalCode,
      facebookURL: user?.facebookURL,
      linkedinURL: user?.linkedinURL,
      twitterURL: user?.twitterURL,
      youtubeURL: user?.youtubeURL,
    },
  });

  const handleSubmitForm = useCallback(
    (updatedInfo: TUserDetail) => {
      updateUser(updatedInfo, {
        onSuccess: (response: AxiosResponse<TUserDetail>) => {
          const updatedUser: TUserDetail = response.data;
          setUser({ user: updatedUser });

          toast({
            title: SUCCESS_MESSAGES.UPDATE_SUCCESS.title,
            description: SUCCESS_MESSAGES.UPDATE_SUCCESS.description,
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        },
        onError: () => {
          toast({
            title: ERROR_MESSAGES.UPDATE_FAIL.title,
            description: ERROR_MESSAGES.UPDATE_FAIL.description,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
          });
        },
      });
    },
    [updateUser, setUser, toast],
  );

  return (
    <>
      <VStack
        as="form"
        id="register-form"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <Grid
          width="100%"
          gridTemplateColumns={{
            xl: 'repeat(12,minmax(0,1fr))',
          }}
          gap={12}
          display={{
            base: 'flex',
            xl: 'grid',
          }}
          flexDirection={{
            base: 'column-reverse',
          }}
        >
          <GridItem
            order={-1}
            as="section"
            w={{
              base: '100%',
              md: 'unset',
            }}
            bg="background.body.quaternary"
            colSpan={7}
          >
            <Heading
              as="h3"
              textTransform="capitalize"
              mb={5}
              pb={5}
              borderBottom="1px solid"
              borderColor=" border.quinary"
              color="text.quinary"
              fontSize="2xl"
            >
              personal information&apos;s
            </Heading>

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
              mb={6}
            >
              <Controller
                control={control}
                rules={AUTH_SCHEMA.FIRST_NAME}
                name="firstName"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    p={0.5}
                    variant="authentication"
                    bg="background.body.primary"
                    label="First Name"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
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
                    bg="background.body.primary"
                    label="Last Name"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('lastName'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

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
                rules={AUTH_SCHEMA.EMAIL}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Email"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('email'), field.onChange(data);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                rules={AUTH_SCHEMA.PHONE_NUMBER}
                name="phoneNumber"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Phone Number (optional)"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('phoneNumber'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

            <Heading w="full" textAlign="left" pt={8} pb={6}>
              Personal Address
            </Heading>
            <HStack
              gap={{
                base: 6,
                md: 10,
              }}
              w="100%"
              flexDirection={{
                base: 'column',
                md: 'unset',
              }}
              mb={6}
            >
              <Controller
                control={control}
                rules={AUTH_SCHEMA.COUNTRY}
                name="country"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Country and Region"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('country'), field.onChange(data);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                rules={AUTH_SCHEMA.CITY}
                name="city"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="City"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('city'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

            <HStack
              gap={{
                base: 6,
                md: 10,
              }}
              w="100%"
              flexDirection={{
                base: 'column',
                md: 'unset',
              }}
            >
              <Controller
                control={control}
                rules={AUTH_SCHEMA.ADDRESS}
                name="address"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Address"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('address'), field.onChange(data);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                rules={AUTH_SCHEMA.POSTAL_CODE}
                name="postalCode"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Postal Code"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('postalCode'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

            <Heading w="full" textAlign="left" pt={8} pb={6}>
              Social Information
            </Heading>
            <HStack
              gap={{
                base: 6,
                md: 10,
              }}
              w="100%"
              flexDirection={{
                base: 'column',
                md: 'unset',
              }}
              mb={6}
            >
              <Controller
                control={control}
                rules={AUTH_SCHEMA.FACEBOOK}
                name="facebookURL"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Facebook"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('facebookURL'), field.onChange(data);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                rules={AUTH_SCHEMA.TWITTER}
                name="twitterURL"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="TWitter"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('twitterURL'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

            <HStack
              gap={{
                base: 6,
                md: 10,
              }}
              w="100%"
              flexDirection={{
                base: 'column',
                md: 'unset',
              }}
            >
              <Controller
                control={control}
                rules={AUTH_SCHEMA.LINKEDIN}
                name="linkedinURL"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Linkedin"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('linkedinURL'), field.onChange(data);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                rules={AUTH_SCHEMA.YOUTUBE}
                name="youtubeURL"
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    variant="authentication"
                    bg="background.body.primary"
                    label="Youtube"
                    {...field}
                    isError={!!error}
                    errorMessages={error?.message}
                    isDisabled={isSubmit}
                    onChange={(data) => {
                      clearErrors('youtubeURL'), field.onChange(data);
                    }}
                  />
                )}
              />
            </HStack>

            <GridItem mb={7}>
              <Text color="red" textAlign="center" py={2} h={10}>
                {root?.message}
              </Text>

              <Flex direction="row-reverse">
                <Button
                  type="submit"
                  aria-label="btn-save-profile"
                  px={4}
                  textTransform="capitalize"
                  form="register-form"
                  isDisabled={!isValid}
                  w="none"
                >
                  Save Profile
                </Button>
              </Flex>
            </GridItem>
          </GridItem>

          <GridItem order={1} colSpan={5}>
            <UpdateProfile setValue={setValue} url={watch('avatarURL') || ''} />
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
};

const UserForm = memo(UserFormComponent);

export default UserForm;
