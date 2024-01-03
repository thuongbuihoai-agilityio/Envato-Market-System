import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { UpdateProfile, InputField } from '@app/components';

// Interfaces
import { TCustomer, TDataSource, TTransaction } from '@app/interfaces';
import { useTransactions } from '@app/hooks';
import { ERROR_MESSAGES, SHOW_TIME, SUCCESS_MESSAGES } from '@app/constants';

interface TransactionProps {
  transaction?: TDataSource;
  onCloseModal?: () => void;
}

const UpdateModal = ({
  transaction,
  onCloseModal = () => {},
}: TransactionProps) => {
  const { control, clearErrors, handleSubmit } = useForm<TDataSource>({
    defaultValues: {
      id: transaction?.id,
      name: transaction?.name,
      avatarURL: transaction?.avatarURL,
      location: transaction?.location,
    },
  });

  const { useUpdateTransaction } = useTransactions();

  const toast = useToast();
  const { mutate: updateTransaction } = useUpdateTransaction();

  const handleChangeValue = useCallback(
    <T,>(field: keyof TCustomer, changeHandler: (value: T) => void) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (updateData: TTransaction) => {
      console.log('updateData', updateData);
      updateTransaction(updateData, {
        onSuccess: () => {
          toast({
            title: SUCCESS_MESSAGES.UPDATE_SUCCESS.title,
            description: SUCCESS_MESSAGES.DELETE_SUCCESS.description,
            status: 'success',
            duration: SHOW_TIME,
            isClosable: true,
            position: 'top-right',
          });
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
    [updateTransaction],
  );

  return (
    <VStack
      as="form"
      id="update-transaction-form"
      onSubmit={handleSubmit(handleSubmitForm)}
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
                  onChange={handleChangeValue('name', onChange)}
                />
              )}
            />
            <Controller
              control={control}
              name="location"
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
          </HStack>
          <GridItem mb={7}>
            <Flex mt={4}>
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
