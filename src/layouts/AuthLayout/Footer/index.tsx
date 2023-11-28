import { Box, Flex, Text, Link, List, ListItem } from '@chakra-ui/react';

// constants
import { LINKS } from '@constants/links';

// utils
import { getCurrentYear } from '@utils/time';

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <Box mt={24}>
      <Flex
        justifyContent="center"
        fontSize="sm"
        columnGap={7}
        _dark={{ color: 'secondary.100' }}
        _light={{ color: 'gray.600' }}
        flexWrap={{
          base: 'wrap',
          md: 'nowrap',
        }}
        as={List}
      >
        {LINKS.map((link) => (
          <ListItem mx={2} key={link.id} w="fit-content">
            <Link
              href={link.href}
              _hover={{ color: 'gray.500' }}
              whiteSpace="nowrap"
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </Flex>
      <Text
        mt={6}
        fontSize="sm"
        variant="textSm"
        textAlign="center"
        _dark={{ color: 'secondary.700' }}
      >
        @ {currentYear} Bankco. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
