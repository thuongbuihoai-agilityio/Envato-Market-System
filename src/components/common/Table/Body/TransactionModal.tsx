import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Button, Flex, VStack, useToast } from '@chakra-ui/react';
import { InputField } from '@app/components';

// Interfaces
import { TTransaction } from '@app/interfaces';

// Hooks
import { useTransactions } from '@app/hooks';

// Constants
import { ERROR_MESSAGES, SHOW_TIME, SUCCESS_MESSAGES } from '@app/constants';

interface TransactionProps {
  transaction?: TTransaction;
  onCloseModal?: () => void;
}

const UpdateModal = ({
  transaction,
  onCloseModal = () => {},
}: TransactionProps) => {
  const { control, clearErrors, handleSubmit, reset } = useForm<TTransaction>({
    defaultValues: {
      id: transaction?.id,
      customer: {
        customerName: transaction?.customer?.customerName,
        address: transaction?.customer?.address,
        email: transaction?.customer.email,
        avatar: transaction?.customer.avatar,
      },
    },
  });

  const toast = useToast();

  const { useUpdateTransaction } = useTransactions();
  const { mutate: updateCustomer } = useUpdateTransaction();

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
      updateCustomer(updateData, {
        onSuccess: () => {
          toast({
            title: SUCCESS_MESSAGES.UPDATE_SUCCESS.title,
            description: SUCCESS_MESSAGES.DELETE_SUCCESS.description,
            status: 'success',
            duration: SHOW_TIME,
            isClosable: true,
            position: 'top-right',
          });
          reset(updateData);
          onCloseModal();
        },
        onError: () => {
          toast({
            title: ERROR_MESSAGES.UPDATE_FAIL.title,
            description: ERROR_MESSAGES.UPDATE_FAIL.description,
            status: 'error',
            duration: SHOW_TIME,
            isClosable: true,
            position: 'top-right',
          });
        },
      });
    },
    [updateCustomer],
  );

  return (
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

const UploadModalMemorized = memo(UpdateModal);
export default UploadModalMemorized;
