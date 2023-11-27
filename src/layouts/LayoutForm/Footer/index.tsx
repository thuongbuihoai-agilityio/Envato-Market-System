import { Box, Flex, Text, Link, List, ListItem } from '@chakra-ui/react';
import { LINKS } from '@constants/links';

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
      {LINKS.map((link) => (
        <ListItem mx={2} key={link.id}>
          <Link href={link.link} _hover={{ color: 'gray.500' }}>
            {link.label}
          </Link>
        </ListItem>
      ))}
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
