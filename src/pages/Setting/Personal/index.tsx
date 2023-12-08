import { memo, useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';

// Hooks
import { Controller, useForm } from 'react-hook-form';

// Constants
import { AUTH_SCHEMA } from '@constants/form';

// Components
import { InputField } from '@components/index';
import UpdateProfile from '../Profile';

const UserFormComponent = () => {
  // TODO: will update integrate later
  const [isSubmit] = useState<boolean>(false);

  const {
    control,
    formState: {
      errors: { root },
    },
    clearErrors,
  } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      country: '',
      city: '',
      address: '',
      postalCode: '',
      facebook: '',
      linkedin: '',
      twitter: '',
      youtube: '',
    },
  });

  return (
    <Grid
      width="100%"
      minH="100vh"
      gridTemplateColumns={{
        base: 'repeat(1,minmax(0,1fr))',
        xl: 'repeat(12,minmax(0,1fr))',
      }}
      gap={12}
    >
      <GridItem
        as="section"
        flex={1}
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
        <VStack as="form" gap={6} id="register-form">
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
          >
            <Controller
              control={control}
              rules={AUTH_SCHEMA.FACEBOOK}
              name="facebook"
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
                    clearErrors('facebook'), field.onChange(data);
                  }}
                />
              )}
            />

            <Controller
              control={control}
              rules={AUTH_SCHEMA.TWITTER}
              name="twitter"
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
                    clearErrors('twitter'), field.onChange(data);
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
              name="linkedin"
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
                    clearErrors('linkedin'), field.onChange(data);
                  }}
                />
              )}
            />

            <Controller
              control={control}
              rules={AUTH_SCHEMA.YOUTUBE}
              name="youtube"
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
                    clearErrors('youtube'), field.onChange(data);
                  }}
                />
              )}
            />
          </HStack>

          <Box mb={7}>
            <Text color="red" textAlign="center" py={2} h={10}>
              {root?.message}
            </Text>

            <Button
              type="submit"
              px={4}
              textTransform="capitalize"
              form="register-form"
              isDisabled={isSubmit}
            >
              Save Profile
            </Button>
          </Box>
        </VStack>
      </GridItem>

      <GridItem colSpan={5}>
        <UpdateProfile />
      </GridItem>
    </Grid>
  );
};

const UserForm = memo(UserFormComponent);

export default UserForm;
