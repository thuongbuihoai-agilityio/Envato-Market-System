import { Box, Flex, Heading, Highlight, Image, Text } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@constants/images';

interface BenefitProps {
  imageURL: string;
  alt: string;
}

const Benefit = ({ imageURL, alt }: BenefitProps) => (
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
    <Image src={imageURL} alt={alt} />
    <Image
      position="absolute"
      top={10}
      left={8}
      src={IMAGES.SQUARE.url}
      alt={IMAGES.SQUARE.alt}
    />
    <Image
      position="absolute"
      top={14}
      right={12}
      src={IMAGES.VLINE.url}
      alt={IMAGES.VLINE.alt}
    />
    <Image
      position="absolute"
      bottom={1}
      left={8}
      src={IMAGES.DOTTED.url}
      alt={IMAGES.DOTTED.alt}
    />
    <Box
      fontFamily="primary"
      textAlign="center"
      m="0 auto"
      w={{ '2xl': '500px' }}
    >
      <Heading
        as="h3"
        variant="heading4Xl"
        marginBottom={4}
        color="text.primary"
      >
        Speady, Easy and Fast
      </Heading>
      <Text fontSize="sm" fontWeight="medium" color="text.secondary">
        BankCo. help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a
        <Highlight query="$20" styles={{ color: 'success.100', p: 1 }}>
          $20
        </Highlight>
        bonus when you receive qualifying direct deposits
      </Text>
    </Box>
  </Flex>
);

export default Benefit;
