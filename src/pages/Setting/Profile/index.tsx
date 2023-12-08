import { Box, Heading, Text, Image, Center, Button } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@constants/images';

const UpdateProfile = () => (
  <Box>
    <Heading
      as="h4"
      textTransform="capitalize"
      color="text.quinary"
      fontWeight="bold"
      fontSize="lg"
      mb={2}
    >
      update profile
    </Heading>

    <Text color="secondary.250" mb={4}>
      Profile at least Size
      <Text as="span" color="text.septenary">
        300x300.
      </Text>
      Gift to work too.
    </Text>

    <Center position="relative">
      <Image
        src={IMAGES.BIG_AVATAR.url}
        alt={IMAGES.BIG_AVATAR.alt}
        objectFit="cover"
      />

      <Button
        position="absolute"
        bottom="-8px"
        ml={24}
        p={2}
        zIndex={1}
        border="none"
        bg="none"
      >
        <Image src={IMAGES.EDIT.url} alt={IMAGES.EDIT.alt} />
      </Button>
    </Center>
  </Box>
);

export default UpdateProfile;
