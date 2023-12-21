import { Button, Center, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// constants
import { IMAGES } from '@app/constants/images';

const NotFoundPage = (): JSX.Element => (
  <Center flexDirection="column-reverse">
    <Image src={IMAGES.NOT_FOUND.url} alt={IMAGES.NOT_FOUND.alt} />
    <Button
      as={Link}
      aria-labelledby="go back"
      aria-label="btn-go-back"
      to="/"
      _hover={{ bg: 'gray.600' }}
      px={10}
      py={3}
      mt={10}
      ml={10}
      fontSize="sm"
      width="fit-content"
      alignSelf="flex-start"
    >
      Go Back
    </Button>
  </Center>
);

export default NotFoundPage;
