import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styles from './Benefit.module.css';
import { IMAGES } from '@constants/images';

interface BenefitType {
  url: string;
}

const Benefit = ({ url = '' }: BenefitType) => (
  <Flex
    display={{ base: 'none', lg: 'block' }}
    flexDirection="column"
    alignItems="center"
    p="80px"
    position="relative"
    h="100vh"
    backgroundColor="blue.100"
    w="50%"
  >
    <Image src={url} alt="Sign in" />
    <Image
      position="absolute"
      top="10"
      left="8"
      src={IMAGES.square}
      alt={IMAGES.altSquare}
    />
    <Image
      position="absolute"
      top="14"
      right="12"
      src={IMAGES.vline}
      alt={IMAGES.altVline}
    />
    <Image
      position="absolute"
      bottom="1"
      left="8"
      src={IMAGES.dotted}
      alt={IMAGES.altDotted}
    />
    <Box
      fontFamily="primary"
      textAlign="center"
      m="0 auto"
      w={{ '2xl': '500px' }}
    >
      <Text fontSize="4xl" fontWeight="semibold" marginBottom="16px">
        Speady, Easy and Fast
      </Text>
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        BankCo. help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a <span className={styles['benefit-description']}>$20</span> bonus when
        you receive qualifying direct deposits
      </Text>
    </Box>
  </Flex>
);

export default Benefit;
