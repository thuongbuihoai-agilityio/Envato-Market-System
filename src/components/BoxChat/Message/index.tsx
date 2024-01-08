import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react';

// Constants
import { AVATAR_POSITION } from '@app/constants';

interface MessageProps {
  content?: string;
  avatar?: string;
  avatarPosition?: AVATAR_POSITION;
  isOwnerMessage?: boolean;
  localeTime?: string;
}

const Message = ({
  content,
  avatar,
  avatarPosition = AVATAR_POSITION.BEFORE,
  isOwnerMessage = false,
  localeTime = new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  }),
}: MessageProps) => (
  <Flex
    width="100%"
    justifyContent={
      avatarPosition === AVATAR_POSITION.AFTER ? 'flex-end' : 'flex-start'
    }
  >
    {avatarPosition === AVATAR_POSITION.BEFORE && (
      <Avatar src={avatar} borderColor="border.tertiary" w={9} h={9} mr={2} />
    )}

    <Flex
      align="flex-end"
      direction={isOwnerMessage ? 'row-reverse' : 'row'}
      mb="30px"
      alignItems="center"
    >
      <Box
        data-testid="image-container"
        bg={
          avatarPosition === AVATAR_POSITION.AFTER
            ? 'primary.300'
            : 'background.section.messageUser'
        }
        p={3}
        ml={2}
        borderRadius={8}
        color="text.primary"
      >
        {content}
      </Box>
      <Spacer />
      <Text
        ml={3}
        mr={3}
        fontSize="xs"
        color="text.textTime"
        fontWeight="medium"
        minW="max-content"
      >
        {localeTime}
      </Text>
    </Flex>

    {avatarPosition === AVATAR_POSITION.AFTER && (
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
