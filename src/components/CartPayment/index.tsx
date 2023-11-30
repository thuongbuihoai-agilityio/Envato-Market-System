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
import { IMAGES } from '@constants/images';

const CartPaymentComponent: React.FC = () => (
  <Box p={4} w={{ base: '100%', md: '30%' }} bg={'#fff'}>
    <Heading
      as="h3"
      fontWeight="bold"
      color="text.primary"
      fontSize="lg"
      mb={3}
    >
      My Wallet
    </Heading>

    <Flex justify="center">
      <Image src={CARD_PAYMENT} alt="Payment Card" />
    </Flex>

    <Box mt={4}>
      <Text fontWeight="bold" color="text.primary" fontSize="lg" mb={3}>
        Quick Transfer
      </Text>
      <Box>
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
            left="20px"
            top="50%"
            transform="translateY(-50%)"
          />

          <Text
            sx={{
              position: 'absolute',
              right: '40px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            fontWeight="bold"
            fontSize="sm"
          >
            $ 10,431
          </Text>
        </Box>
      </Box>

      <Box
        border={'1px solid'}
        borderColor="border.secondary"
        p={4}
        mt={5}
        borderRadius="8px"
      >
        <Text color="text.secondary"> Enter amount </Text>
        <Flex direction="row">
          <Input
            variant="authentication"
            type="number"
            placeholder="$"
            _placeholder={{
              color: 'text.primary',
              fontSize: '2xl',
              fontWeight: 'bold',
            }}
            sx={{ border: 'none', padding: '0px' }}
          />

          <Image
            src={IMAGES.USER_AVATAR.url}
            alt={IMAGES.USER_AVATAR.alt}
            boxSize={6}
            mt={3}
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
