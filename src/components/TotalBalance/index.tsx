import { memo, useCallback } from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';

// Stores
import { authStore } from '@app/stores';

// Constants
import { IMAGES } from '@app/constants/images';

// Hooks
import { useForm } from '@app/hooks';

// Utils
import { formatDate, formatDecimalNumber } from '@app/utils';

// Components
import { AddMoneyInput } from './AddMoneyInput';

// Mocks
import { MOCK_CURRENT_TIME } from '@app/mocks';

interface TotalBalanceProps {
  balance?: number;
  growth?: number;
  date?: Date;
}

export type TAddMoneyForm = {
  userId: string;
  amount: string;
};

const TotalBalanceComponent = ({
  balance = 88232,
  growth = 2.05,
  date = MOCK_CURRENT_TIME,
}: TotalBalanceProps): JSX.Element => {
  const userId = authStore((state): string | undefined => state.user?.id);

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<TAddMoneyForm>({
    defaultValues: {
      userId,
      amount: '',
    },
  });

  // TODO: Update later
  const onSubmit: SubmitHandler<TAddMoneyForm> = useCallback(() => {}, []);

  return (
    <Box
      w="full"
      bg="background.body.quaternary"
      px={8}
      py={7}
      borderRadius="lg"
    >
      <Box
        border="1px solid"
        borderColor="border.quaternary"
        mt={5}
        borderRadius="lg"
        p={8}
      >
        <Text fontSize="2xl" fontWeight="semibold" mb={2} color="text.primary">
          Total Balance
        </Text>
        <Box display="inline-block" mb={2}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            mb={0}
            color="text.primary"
            lineHeight={9}
            display="inline"
          >
            {`$${formatDecimalNumber(balance)}`}
          </Text>
          <Text
            fontSize="md"
            fontWeight="medium"
            mb={0}
            color="text.secondary"
            lineHeight={5}
            textTransform="uppercase"
            display="inline"
            ml={2}
          >
            usd
          </Text>
        </Box>

        <Flex align="center" mb={4}>
          <Text fontSize="md" color="text.tertiary" mr={2} fontWeight="medium">
            {formatDate(+date)}
          </Text>
          <Flex align="center">
            <Image
              src={IMAGES.INCREASE_ICON.url}
              fallbackSrc={IMAGES.FALLBACK.url}
              fallbackStrategy="onError"
              w={5}
              h={5}
              mr="2"
            />
            <Text fontSize="lg" fontWeight="bold" color="text.currencyColor">
              {growth}%
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Flex align="center" justify="center">
        <Box
          border="1px solid"
          borderColor="secondary.250"
          p={4}
          borderRadius="lg"
          bottom={4}
          mt={-6}
          bg="background.body.quaternary"
          py={3}
          px={6}
        >
          <Text align="center" fontSize="sm" fontWeight="medium">
            Withdraw All Earning
          </Text>
        </Box>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AddMoneyInput control={control} />
        <Button
          aria-label="btn-add-money"
          mt={14}
          colorScheme="primary"
          fontWeight="bold"
          type="submit"
          isDisabled={!isValid || isSubmitting}
        >
          Add Money
        </Button>
      </form>
    </Box>
  );
};

const TotalBalance = memo(TotalBalanceComponent);

export default TotalBalance;
