import { Box, Flex, Text, Avatar, AvatarBadge } from '@chakra-ui/react';

// Utils
import { getStatusColor } from '@app/utils';

export type Props = {
  avatar?: string;
  name?: string;
  status: string;
  localeTime?: string;
  icon?: React.ReactNode;
  statusColor: string;
};

export const ChatMember = ({
  avatar,
  name,
  status,
  localeTime,
  icon,
  statusColor,
}: Props) => (
  <Box>
    <Flex gap={3}>
      <Avatar src={avatar} borderRadius="50%">
        <AvatarBadge boxSize={4} bg={getStatusColor(statusColor)} top={7} />
      </Avatar>
      <Box mr={6}>
        <Text>{name}</Text>
        <Text color="text.secondary">{status}</Text>
      </Box>

      <Flex direction="column">
        <Text>{localeTime}</Text>
        {icon}
      </Flex>
    </Flex>
  </Box>
);
