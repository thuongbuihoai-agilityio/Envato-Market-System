import { memo, useCallback } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Control } from 'react-hook-form';

// Hooks
import { useForm } from '@app/hooks';

// Components
import { CardBalance } from './CardBalance';
import { UserSelector } from './UserSelector';
import { EnterMoney } from './EnterMoney';

export interface CardPaymentProps {
  balance?: number;
}
type TTransfer = {
  money: string;
  userId: string;
};
export type TTransferControl = {
  control: Control<TTransfer>;
};

const CartPaymentComponent = ({
  balance = 24098,
}: CardPaymentProps): JSX.Element => {
  const { control, handleSubmit } = useForm<TTransfer>({
    defaultValues: {
      money: '',
      userId: '',
    },
  });

  // TODO: Update to late
  const submit = useCallback(() => {}, []);

  return (
    <Box
      p={4}
      w="full"
      bg="background.body.quaternary"
      py={{ base: 4, md: 5 }}
      px={{ base: 4, md: 10 }}
      borderRadius="lg"
    >
      <Heading
        as="h3"
        fontWeight="bold"
        color="text.primary"
        fontSize="lg"
        mb={3}
        textTransform="capitalize"
      >
        my wallet
      </Heading>

      <CardBalance balance={balance} />

      <Box as="form" mt={4} onSubmit={handleSubmit(submit)}>
        <UserSelector control={control} />
        <EnterMoney control={control} />
      </Box>
    </Box>
  );
};

const CardPayment = memo(CartPaymentComponent);

export default CardPayment;
