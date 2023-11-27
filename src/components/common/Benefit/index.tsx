import { Box, Flex, Highlight, Image, Text } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@constants/images';

interface BenefitType {
  url: string;
}

const Benefit = ({ url = '' }: BenefitType) => (
  <Flex
    w="50%"
    p="80px"
    h="100vh"
    alignItems="center"
    position="relative"
    flexDirection="column"
    display={{ base: 'none', lg: 'block' }}
    backgroundColor="background.section.primary"
  >
    {/* TODO: Will use common component Image after being defined */}
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
      <Text
        fontSize="4xl"
        fontWeight="semibold"
        marginBottom="16px"
        color="background.section.textPrimary"
      >
        Speady, Easy and Fast
      </Text>
      <Text
        fontSize="sm"
        fontWeight="medium"
        color="background.section.textSecondary"
      >
        BankCo. help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a{' '}
        <Highlight query="$20" styles={{ color: 'success.100' }}>
          $20
        </Highlight>{' '}
        bonus when you receive qualifying direct deposits
      </Text>
    </Box>
  </Flex>
);

export default Benefit;
