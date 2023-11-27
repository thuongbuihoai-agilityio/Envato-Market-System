import { Box, Heading, Text } from '@chakra-ui/react';

interface HeaderFormProps {
  content: string;
}

const Header = ({ content }: HeaderFormProps) => (
  <Box>
    <Heading
      as="h1"
      fontWeight="semibold"
      fontFamily="secondary"
      lineHeight="10"
      marginBottom="8px"
      fontSize="4xl"
    >
      {content}
    </Heading>
    <Text fontSize="md" fontWeight="medium" color="gray.500">
      Send, spend and save smarter
    </Text>
  </Box>
);

export default Header;
