import { Button, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// constants
import { IMAGES } from '@app/constants/images';

const NotFoundPage = (): JSX.Element => (
  <Flex maxWidth="672px" direction="column" justify="center" align="center">
    <Image src={IMAGES.NOT_FOUND.url} alt={IMAGES.NOT_FOUND.alt} />
    <Button
      as={Link}
      aria-label="btn-go-back"
      to="/"
      mt={6}
      _hover={{ bg: 'gray.600' }}
      px={10}
      py={3}
      fontSize="sm"
      width="fit-content"
    >
      Go Back
    </Button>
  </Flex>
);

export default NotFoundPage;
