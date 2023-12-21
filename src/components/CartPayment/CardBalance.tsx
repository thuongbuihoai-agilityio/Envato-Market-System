import { ReactElement, memo } from 'react';
import {
  Center,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

// Components
import { CardPaymentProps } from '.';

// Icons
import { Eye, EyeSlash } from '@app/components/Icons';

// Utils
import { formatDecimalNumber } from '@app/utils';

// Constants
import { IMAGES } from '@app/constants';

type TBalanceStatus = {
  balance: string;
  iconBalance: ReactElement;
};

const Card = ({ balance }: Required<Pick<CardPaymentProps, 'balance'>>) => {
  const { isOpen: isShowBalance, onToggle: onToggleShowBalance } =
    useDisclosure();

  const { iconBalance, balance: balanceStatus }: TBalanceStatus = {
    iconBalance: isShowBalance ? <EyeSlash /> : <Eye />,
    balance: isShowBalance ? '******' : `$${formatDecimalNumber(balance)}`,
  };

  return (
    <Center>
      <Flex
        flexDir="column"
        bgImage={IMAGES.CARD_PAYMENT.url}
        justifyContent="flex-end"
        borderRadius="lg"
        bgPosition="center"
        bgSize={{ base: 'contain', md: 'unset' }}
        bgRepeat="no-repeat"
        p={6}
        w={{ base: 250, sm: 340 }}
        h={{ base: 150, sm: 200 }}
      >
        <Flex alignItems="center" gap={{ base: 1, sm: 3 }}>
          <Text variant="textSm" color="secondary.300">
            Balance
          </Text>
          <IconButton
            aria-label="eye"
            icon={iconBalance}
            w="fit-content"
            bg="none"
            onClick={onToggleShowBalance}
            sx={{
              _hover: {
                bg: 'none',
              },
            }}
          />
        </Flex>
        <Text
          color="common.white"
          variant="text3Xl"
          fontWeight="semibold"
          fontSize={{ base: 'md', sm: '3xl' }}
          lineHeight={{ base: 'unset', sm: 'lg' }}
        >
          {balanceStatus}
        </Text>
      </Flex>
    </Center>
  );
};

export const CardBalance = memo(Card);
