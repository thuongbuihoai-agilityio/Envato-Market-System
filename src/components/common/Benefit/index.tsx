import { memo } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@app/constants/images';

interface BenefitProps {
  imageURL: string;
  alt: string;
  heading?: string;
  description?: string;
}

const BenefitComponent = ({
  imageURL,
  alt,
  heading,
  description,
}: BenefitProps) => (
  <Flex
    w="50%"
    p={20}
    minH="100vh"
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
        {heading}
      </Heading>
      <Text
        fontSize="sm"
        fontWeight="medium"
        color="text.secondary"
        dangerouslySetInnerHTML={{ __html: `${description}` }}
      />
    </Box>
  </Flex>
);

const Benefit = memo(BenefitComponent);

export default Benefit;
