import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

interface DividerProps {
  content: string;
}

const DividerCustom = ({ content }: DividerProps) => (
  <Box position="relative" w="full" m="auto" py={10}>
    <Divider w="full" h="1px" bg="gray.500" />

    <AbsoluteCenter bg="white" px={4} color="gray.500">
      {content}
    </AbsoluteCenter>
  </Box>
);

export default DividerCustom;
