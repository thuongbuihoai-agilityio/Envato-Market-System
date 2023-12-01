import { memo } from 'react';
import {
  Box,
  Text,
  Image,
  Select,
  Heading,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';

// Assets
import CARD_PAYMENT from 'src/assets/images/card-payment.svg';
import { ChevronIcon } from '@assets/images/ChevronIcon';

// Constants
import { IMAGES } from '@constants/index';

const CartPaymentComponent = (): JSX.Element => (
  <Box p={4} w="full" bg="background.body.quaternary" padding="20px 42px">
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

    <Image src={CARD_PAYMENT} alt="Payment Card" />

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
            type="number"
            _dark={{
              border: 'none',
            }}
            sx={{ border: 'none', padding: 0 }}
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

const CardPayment = memo(CartPaymentComponent);

export default CardPayment;
