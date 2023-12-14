import { memo, useState } from 'react';
import {
  Box,
  Text,
  Image,
  Select,
  Heading,
  Flex,
  Input,
  Button,
  Center,
  IconButton,
} from '@chakra-ui/react';

// Assets
import { ChevronIcon, Eye, EyeSlash } from '@app/assets/icons';

// Constants
import { IMAGES } from '@app/constants';

interface CardPaymentProps {
  balance?: number;
}

const CartPaymentComponent = ({
  balance = 24.098,
}: CardPaymentProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [hideBalance, setHideBalance] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters and leading zeros
    const sanitizedValue = event.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^0+/, '');

    // Prevent entering negative numbers
    if (sanitizedValue !== '' && sanitizedValue.charAt(0) === '-') {
      return;
    }

    setValue(sanitizedValue);
  };

  const toggleHideBalance = () => {
    setHideBalance((prev) => !prev);
  };

  return (
    <Box
      p={4}
      w="full"
      bg="background.body.quaternary"
      padding="20px 42px"
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

      <Center>
        <Flex
          flexDir="column"
          bgImage={IMAGES.CARD_PAYMENT.url}
          justifyContent="flex-end"
          p={6}
          w={340}
          h={200}
        >
          <Flex alignItems="center" gap={3}>
            <Text variant="textSm" color="secondary.300">
              Balance
            </Text>
            <IconButton
              aria-label="eye"
              icon={hideBalance ? <EyeSlash /> : <Eye />}
              w="fit-content"
              bg="none"
              onClick={toggleHideBalance}
              sx={{
                _hover: {
                  bg: 'none',
                },
              }}
            />
          </Flex>
          <Text color="common.white" variant="text3Xl" fontWeight="semibold">
            {hideBalance ? '******' : `$${balance}`}
          </Text>
        </Flex>
      </Center>

      <Box mt={4}>
        <Text
          fontWeight="bold"
          color="text.primary"
          fontSize="lg"
          mb={3}
          textTransform="capitalize"
        >
          quick transfer
        </Text>

        <Box position="relative">
          <Select
            size="lg"
            sx={{
              paddingLeft: '50px',
            }}
            borderColor="border.secondary"
            color="text.primary"
            icon={<ChevronIcon />}
          >
            <option value="debit" color="text.primary">
              Debit
            </option>
          </Select>

          <Image
            src={IMAGES.DEBIT_ICON.url}
            alt={IMAGES.DEBIT_ICON.alt}
            boxSize={6}
            position="absolute"
            left={5}
            top="50%"
            transform="translateY(-50%)"
          />

          <Text
            sx={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            fontWeight="bold"
            fontSize="sm"
          >
            $ 10,431
          </Text>
        </Box>

        <Box
          border="1px solid"
          borderColor="border.secondary"
          p={4}
          mt={5}
          borderRadius="lg"
        >
          <Text color="text.secondary"> Enter amount </Text>
          <Flex direction="row" alignItems="center">
            <Text color="text.primary" fontSize="2xl" fontWeight="bold">
              $
            </Text>
            <Input
              variant="authentication"
              type="text"
              _dark={{
                border: 'none',
              }}
              sx={{ border: 'none', padding: 0 }}
              color="text.primary"
              fontWeight="bold"
              fontSize="2xl"
              ml={2}
              value={value}
              name="money"
              onChange={handleChange}
            />

            <Image
              src={IMAGES.USER_AVATAR.url}
              alt={IMAGES.USER_AVATAR.alt}
              boxSize={6}
              mt={3}
              w="42px"
            />
          </Flex>
        </Box>

        <Button mt={4} colorScheme="primary" fontWeight="bold">
          Send Money
        </Button>
      </Box>
    </Box>
  );
};

const CardPayment = memo(CartPaymentComponent);

export default CardPayment;
