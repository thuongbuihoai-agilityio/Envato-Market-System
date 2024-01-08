import { memo, useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { InputField } from '@app/components';

// Interfaces
import { TTransaction } from '@app/interfaces';

// Constants
import { STATUS_SUBMIT } from '@app/constants';

interface TransactionProps {
  isDelete?: boolean;
  transaction?: TTransaction;
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
      id: transaction?.id,
      customer: {
        customerName: transaction?.customer?.customerName,
        address: transaction?.customer?.address,
        email: transaction?.customer.email,
        avatar: transaction?.customer.avatar,
        role: transaction?.customer.role,
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
      <Controller
        control={control}
        name="customer.customerName"
        render={({ field, field: { onChange }, fieldState: { error } }) => (
          <InputField
            variant="authentication"
            bg="background.body.primary"
            label="Customer Name"
            {...field}
            isError={!!error}
            errorMessages={error?.message}
            onChange={handleChangeValue('name', onChange)}
          />
        )}
      />
      <Controller
        control={control}
        name="customer.address"
        render={({ field, fieldState: { error } }) => (
          <InputField
            variant="authentication"
            bg="background.body.primary"
            label="Location"
            {...field}
            isError={!!error}
            errorMessages={error?.message}
            onChange={handleChangeValue('location', field.onChange)}
          />
        )}
      />
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
