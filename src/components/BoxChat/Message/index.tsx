import { Avatar, Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';

interface MessageProps {
  content?: string;
  avatar?: string;
  isImage?: boolean;
  avatarPosition?: 'before' | 'after';
  isOwnerMessage?: boolean;
}

const Message = ({
  content,
  avatar,
  isImage,
  avatarPosition = 'before',
  isOwnerMessage = false,
}: MessageProps) => {
  const avatarBorderColor = 'border.tertiary';

  const reversePositionTime = isOwnerMessage ? 'row-reverse' : 'row';

  return (
    <Flex>
      {avatarPosition === 'before' && (
        <Avatar
          src={avatar}
          borderColor={avatarBorderColor}
          w="36px"
          h="36px"
          mr={2}
        />
      )}

      <Flex align="flex-end" direction={reversePositionTime} mb="30px">
        <Box>
          {isImage ? (
            <>
              <Image
                src={'images/record.png'}
                _light={{
                  display: 'block',
                }}
                _dark={{
                  display: 'none',
                }}
                alt="Message Image"
                ml={2}
              />

              <Image
                src={'images/record-dark.png'}
                _light={{
                  display: 'none',
                }}
                _dark={{
                  display: 'block',
                }}
                alt="Message Image"
                ml={2}
              />
            </>
          ) : (
            <Text
              bg="background.component.secondary"
              p={3}
              ml={2}
              borderRadius={8}
              color="text.primary"
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
          {new Date().toLocaleTimeString()}
        </Text>
      </Flex>

      {avatarPosition === 'after' && (
        <Avatar
          src={avatar}
          borderColor={avatarBorderColor}
          w="36px"
          h="36px"
          ml={2}
        />
      )}
    </Flex>
  );
};

export default Message;
