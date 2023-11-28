import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

type TDividerProps = {
  content: string;
};

const DividerCustom = ({ content }: TDividerProps) => (
  <Box position="relative" w="full" m="auto" py="10">
    <Divider w="full" h="px" bg="gray.500" />

    <AbsoluteCenter
      bg="white"
      px="4"
      color="gray.500"
      top="50%"
      transform="translate(-50%, -50%)"
    >
      {content}
    </AbsoluteCenter>
  </Box>
);

export default DividerCustom;
