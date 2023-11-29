import {
  AbsoluteCenter,
  Box,
  Divider as ChakraProvider,
} from '@chakra-ui/react';

type TDividerProps = {
  content: string;
};

const Divider = ({ content }: TDividerProps) => (
  <Box position="relative" w="full" m="auto" py="10">
    <ChakraProvider w="full" bg="gray.500" />

    <AbsoluteCenter
      _light={{ bg: '#fff' }}
      _dark={{ bg: 'secondary.600', height: '1px' }}
      px="4"
      color="gray.500"
      top="50%"
      transform="translate(-50%, -50%)"
    >
      {content}
    </AbsoluteCenter>
  </Box>
);

export default Divider;
