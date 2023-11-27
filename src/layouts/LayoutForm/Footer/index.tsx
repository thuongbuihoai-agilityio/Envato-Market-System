import { Box, Flex, Text, Link, List, ListItem } from '@chakra-ui/react';

const Footer = () => (
  <Box p={4} textAlign="center">
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      columnGap="40px"
      fontSize="sm"
      _dark={{ color: 'secondary.100' }}
      _light={{ color: 'gray.600' }}
      as={List}
    >
      <ListItem mx={2}>
        <Link href="#" _hover={{ color: 'gray.500' }}>
          Terms & Conditions
        </Link>
      </ListItem>
      <ListItem mx={2}>
        <Link href="#" _hover={{ color: 'gray.500' }}>
          Privacy Policy
        </Link>
      </ListItem>
      <ListItem mx={2}>
        <Link href="#" _hover={{ color: 'gray.500' }}>
          Help
        </Link>
      </ListItem>
      <ListItem mx={2}>
        <Link href="#" _hover={{ color: 'gray.500' }}>
          English
        </Link>
      </ListItem>
    </Flex>
    <Text
      mt={4}
      fontSize="sm"
      variant="textSm"
      _dark={{ color: 'secondary.700' }}
    >
      @ 2023 Bankco. All Rights Reserved.
    </Text>
  </Box>
);

export default Footer;
