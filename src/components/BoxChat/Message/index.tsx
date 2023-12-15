import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react';

// Components
import MessageImage from './MessageImage';

interface MessageProps {
  content?: string;
  avatar?: string;
  isImage?: boolean;
  avatarPosition?: 'before' | 'after';
  isOwnerMessage?: boolean;
  localeTime?: string;
}

const Message = ({
  content,
  avatar,
  avatarPosition = 'before',
  isImage = false,
  isOwnerMessage = false,
  localeTime = new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  }),
}: MessageProps) => (
  <Flex>
    {avatarPosition === 'before' && (
      <Avatar src={avatar} borderColor="border.tertiary" w={9} h={9} mr={2} />
    )}

    <Flex
      align="flex-end"
      direction={isOwnerMessage ? 'row-reverse' : 'row'}
      mb="30px"
    >
      <Box data-testid="image-container">
        {isImage ? (
          <MessageImage />
        ) : (
          <Text
            bg="background.component.secondary"
            p={3}
            ml={2}
            borderRadius={8}
            color="text.primary"
            data-testid="text-content"
          >
            {content}
          </Text>
        )}
      </Box>
      <Spacer />
      <Text
        ml={3}
        mr={3}
        fontSize="xs"
        color="secondary.250"
        fontWeight="medium"
      >
        {localeTime}
      </Text>
    </Flex>

    {avatarPosition === 'after' && (
      <Avatar
        src={avatar}
        borderColor="border.tertiary"
        w={9}
        h={9}
        ml={2}
        data-testid="avatar"
      />
    )}
  </Flex>
);

export default Message;
