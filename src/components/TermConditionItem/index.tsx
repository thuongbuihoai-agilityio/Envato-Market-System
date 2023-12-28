import { Box, Text } from '@chakra-ui/react';

export type TermAndConditionProps = {
  heading: string;
  content: string;
  description?: string;
  note?: string;
};

const TermAndConditionItem = ({
  heading,
  content,
  description,
  note,
}: TermAndConditionProps) => (
  <Box mb={8}>
    <Text as="h4" fontWeight="bold" fontSize="lg" mb={3}>
      {heading}
    </Text>
    <Text mb={3} fontSize="md">
      {content}
    </Text>
    <Text fontSize="md">{description}</Text>

    {note && (
      <Box mt={2} bg="secondary.600" p={2} borderRadius="md" px={7} py={6}>
        <Text fontSize="md">{note}</Text>
      </Box>
    )}
  </Box>
);

export default TermAndConditionItem;
