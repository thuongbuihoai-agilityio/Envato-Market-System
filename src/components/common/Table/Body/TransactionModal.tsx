import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../InputField';
import { Select, UpdateProfile } from '@app/components';
import { PAYMENT, STATUS_TRANSACTION } from '@app/constants';
import { memo, useCallback } from 'react';
import { TDataSource } from '@app/interfaces';

interface TransactionProps {
  transaction?: TDataSource;
  onUpdateTransaction?: () => void;
  onCloseModal?: () => void;
}

const UpdateModal = ({
  transaction,
  onUpdateTransaction = () => {},
  onCloseModal = () => {},
}: TransactionProps) => {
  const { control } = useForm({
    defaultValues: {
      id: transaction?.id,
      name: transaction?.name,
      avatarURL: transaction?.avatarURL,
      email: transaction?.email,
      location: transaction?.location,
      spent: transaction?.spent,
      date: transaction?.date,
      paymentStatus: transaction?.paymentStatus,
      transactionStatus: transaction?.transactionStatus,
    },
  });

  const renderPaymentStatus = useCallback(
    () => <Text color="secondary.450">{transaction?.paymentStatus}</Text>,
    [transaction?.paymentStatus],
  );

  const renderTransactionStatus = useCallback(
    () => <Text color="secondary.450">{transaction?.transactionStatus}</Text>,
    [transaction?.transactionStatus],
  );

  return (
    <VStack
      as="form"
      id="register-form"
      // onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Grid
        width="full"
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
          <HStack
            gap={{
              base: 6,
              md: 2,
            }}
            w="100%"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.FIRST_NAME}
              name="name"
              render={({
                field,
                field: { onChange },
                fieldState: { error },
              }) => (
                <InputField
                  variant="authentication"
                  bg="background.body.primary"
                  label="Customer Name"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  // onChange={handleChangeValue('customer-name', onChange)}
                />
              )}
            />
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.LAST_NAME}
              name="location"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  variant="authentication"
                  bg="background.body.primary"
                  label="Location"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  // onChange={handleChangeValue('location', field.onChange)}
                />
              )}
            />
          </HStack>
          <HStack
            gap={{
              base: 6,
              md: 2,
            }}
            w="100%"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.EMAIL}
              name="spent"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  variant="authentication"
                  bg="background.body.primary"
                  label="Spent"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  // onChange={handleChangeValue('spent', field.onChange)}
                />
              )}
            />
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.PHONE_NUMBER}
              name="date"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  variant="authentication"
                  bg="background.body.primary"
                  label="Date"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  // value={formatAllowOnlyNumbers(field.value)}
                  // onChange={handleChangeValue('date', field.onChange)}
                />
              )}
            />
          </HStack>
          <HStack
            gap={{
              base: 6,
              md: 2,
            }}
            w="100%"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Controller
              control={control}
              name="paymentStatus"
              render={() => (
                <Flex flexDirection="column" w={227}>
                  <Text mb={1} color="secondary.450">Payment</Text>
                  <Select
                    title="Payment"
                    options={PAYMENT}
                    renderTitle={renderPaymentStatus}
                  />
                </Flex>
              )}
            />
            <Controller
              control={control}
              name="transactionStatus"
              render={() => (
                <Flex flexDirection="column" w={227}>
                  <Text mb={1} color="secondary.450">Status</Text>
                  <Select
                    title="Status"
                    options={STATUS_TRANSACTION}
                    renderTitle={renderTransactionStatus}
                  />
                </Flex>
              )}
            />
          </HStack>

          <GridItem mb={7}>
            <Flex mt={4}>
              <Button
                w={44}
                bg="green.600"
                mr={3}
                onClick={onUpdateTransaction}
              >
                Save
              </Button>
              <Button
                w={44}
                bg="orange.300"
                _hover={{ bg: 'orange.400' }}
                onClick={onCloseModal}
              >
                Cancel
              </Button>
            </Flex>
          </GridItem>
        </GridItem>

        <GridItem order={1} colSpan={5}>
          <UpdateProfile
            title="Select your avatar"
            control={control}
            // onUploadError={handleShowErrorWhenUploadImage}
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};

const UploadModalMemorized = memo(UpdateModal);
export default UploadModalMemorized;
