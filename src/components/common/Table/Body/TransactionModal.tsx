import { memo, useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { InputField } from '@app/components';

// Interfaces
import { TCustomer, TTransaction } from '@app/interfaces';

// Constants
import { STATUS_SUBMIT } from '@app/constants';

interface TransactionProps {
  isDelete?: boolean;
  transaction?: Partial<TTransaction & TCustomer & { id: string }>;
  onDeleteTransaction?: () => void;
  onUpdateTransaction?: (transactionData: TTransaction) => void;
  onCloseModal?: () => void;
}

const TransactionModal = ({
  isDelete = false,
  transaction,
  onDeleteTransaction = () => {},
  onUpdateTransaction = () => {},
  onCloseModal = () => {},
}: TransactionProps) => {
  const {
    control,
    formState: { isDirty },
    clearErrors,
    handleSubmit,
    reset,
  } = useForm<TTransaction>({
    defaultValues: {
      _id: transaction?.id,
      customer: {
        firstName: transaction?.customer?.firstName,
        lastName: transaction?.customer?.lastName,
        address: {
          state: transaction?.customer?.address.state,
          street: transaction?.customer?.address.street,
          city: transaction?.customer?.address.city,
          zip: transaction?.customer?.address.zip,
        },
      },
    },
  });

  const disabled = useMemo(
    () =>
      isDelete
        ? status === STATUS_SUBMIT.PENDING
        : !isDirty || status === STATUS_SUBMIT.PENDING,
    [isDirty, isDelete],
  );

  const handleChangeValue = useCallback(
    <T,>(field: keyof TTransaction, changeHandler: (value: T) => void) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (updateData: TTransaction) => {
      onUpdateTransaction(updateData);
      reset(updateData);
      onCloseModal();
    },
    [onUpdateTransaction],
  );

  return isDelete ? (
    <Box>
      <Text fontSize="lg">
        Are you sure delete the transaction with id:
        <Text as="span" pl={1} color="red.500" fontWeight="bold">
          {transaction?.id}
        </Text>
        ?
      </Text>
      <Flex my={4} justifyContent="center">
        <Button
          w={44}
          bg="green.600"
          mr={3}
          isDisabled={disabled}
          onClick={onDeleteTransaction}
        >
          Delete
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
    </Box>
  ) : (
    <VStack
      as="form"
      id="update-transaction-form"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Flex>
        <Controller
          control={control}
          name="customer.firstName"
          render={({ field, field: { onChange }, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="First Name"
              mr={2}
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', onChange)}
            />
          )}
        />
        <Controller
          control={control}
          name="customer.lastName"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="Last Name"
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', field.onChange)}
            />
          )}
        />
      </Flex>
      <Flex>
        <Controller
          control={control}
          name="customer.address.street"
          render={({ field, field: { onChange }, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="Street"
              mr={2}
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', onChange)}
            />
          )}
        />
        <Controller
          control={control}
          name="customer.address.state"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="State"
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', field.onChange)}
            />
          )}
        />
      </Flex>
      <Flex>
        <Controller
          control={control}
          name="customer.address.city"
          render={({ field, field: { onChange }, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="City"
              mr={2}
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', onChange)}
            />
          )}
        />
        <Controller
          control={control}
          name="customer.address.zip"
          render={({ field, fieldState: { error } }) => (
            <InputField
              variant="authentication"
              bg="background.body.primary"
              label="Zip"
              {...field}
              isError={!!error}
              errorMessages={error?.message}
              onChange={handleChangeValue('customer', field.onChange)}
            />
          )}
        />
      </Flex>
      <Flex my={4}>
        <Button
          type="submit"
          form="update-transaction-form"
          w={44}
          bg="green.600"
          mr={3}
          isDisabled={disabled}
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
    </VStack>
  );
};

const TransactionModalMemorized = memo(TransactionModal);
export default TransactionModalMemorized;
