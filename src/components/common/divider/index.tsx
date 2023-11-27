import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';

interface Props {
  children: string;
}

const DividerCustom: React.FC<Props> = ({ children }) => (
  <Box position="relative" w="full" m="auto" padding="10">
    <Divider w="full" />
    <AbsoluteCenter bg="white" px="4" color="gray.500">
      {children}
    </AbsoluteCenter>
  </Box>
);

export default DividerCustom;
