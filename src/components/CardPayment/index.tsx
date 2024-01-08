import { memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';

// Hooks
import { useForm } from '@app/hooks';

// Components
import { CardBalance } from './CardBalance';
import { UserSelector } from './UserSelector';
import { EnterMoney } from './EnterMoney';

export interface CardPaymentProps {
  balance?: number;
  onSubmit?: SubmitHandler<TTransfer>;
}

export type TTransfer = {
  amount: string;
  userId: string;
};

const CardPaymentComponent = ({
  balance = 24098,
  onSubmit = () => {},
}: CardPaymentProps): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TTransfer>({});

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

      <Box as="form" mt={4} onSubmit={handleSubmit(onSubmit)}>
        <UserSelector control={control} />
        <EnterMoney isDisabled={!isValid || isSubmitting} control={control} />
      </Box>
    </Box>
  );
};

const CardPayment = memo(CardPaymentComponent);

export default CardPayment;
