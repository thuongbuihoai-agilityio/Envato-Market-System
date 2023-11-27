import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

interface Props {
  content: string;
}

const DividerCustom: React.FC<Props> = ({ content }) => (
  <Box position="relative" w="full" m="auto" padding="10">
    <Divider w="full" />

    <AbsoluteCenter bg="white" px="4" color="gray.500">
      {content}
    </AbsoluteCenter>
  </Box>
);

export default DividerCustom;
