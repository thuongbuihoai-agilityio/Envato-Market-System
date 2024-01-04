import { memo } from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  AvatarBadge,
  useColorModeValue,
} from '@chakra-ui/react';

// Themes
import { colors } from '@app/themes/bases/colors';

// Utils
import { getStatusColor } from '@app/utils';

export type Props = {
  avatar?: string;
  name?: string;
  status?: string;
  localeTime?: string;
  icon?: React.ReactNode;
  statusColor?: string;
  onClick?: () => void;
};

const ChatMember = ({
  avatar,
  name,
  localeTime,
  icon,
  statusColor = '',
  onClick,
}: Props) => {
  const colorFill = useColorModeValue(
    colors.secondary[200],
    colors.secondary[600],
  );

  return (
    <Box
      cursor="pointer"
      _hover={{ bg: colorFill }}
      onClick={onClick}
      borderRadius={'lg'}
    >
      <Flex justify="space-between" p={3.5}>
        <Flex gap={3}>
          <Avatar src={avatar} borderRadius="50%">
            <AvatarBadge boxSize={4} bg={getStatusColor(statusColor)} top={7} />
          </Avatar>
          <Box mr={6}>
            <Text>{name}</Text>
          </Box>
        </Flex>

        <Flex direction="column">
          <Text>{localeTime}</Text>
          {icon}
        </Flex>
      </Flex>
    </Box>
  );
};

const ChatMemberMemorized = memo(ChatMember);

export default ChatMemberMemorized;
