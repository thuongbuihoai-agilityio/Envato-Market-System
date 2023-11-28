import { Box, Flex, Text, Link, List, ListItem } from '@chakra-ui/react';

// constants
import { LINKS } from '@constants/links';

// utils
import { getCurrentYear } from '@utils/CurrentYear';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <Box p={4} textAlign="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        columnGap="10"
        fontSize="sm"
        _dark={{ color: 'secondary.100' }}
        _light={{ color: 'gray.600' }}
        as={List}
      >
        {LINKS.map((link) => (
          <ListItem mx={2} key={link.id}>
            <Link href={link.href} _hover={{ color: 'gray.500' }}>
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
        @ {currentYear} Bankco. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
