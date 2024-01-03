import { memo, useMemo, useState } from 'react';
import { Box, Heading, Flex, theme, useColorModeValue } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// themes
import { colors } from '@app/themes/bases/colors';

// Constants
import { AVATAR_POSITION, IMAGES } from '@app/constants';

// Components
import { Message } from '@app/components';
import { ChatMemberMemorized } from '@app/components';
import { CustomButton } from '@app/components';
import { SendIcon } from '@app/components/Icons';

// Mocks
import { MESSAGE_TIME, MESSAGES } from '@app/mocks';

// Stores
import { authStore } from '@app/stores';

// Interfaces
import { MessageType } from '@app/interfaces/messages';

export type Props = {
  activeMember?: string;
  filteredMessages: MessageType[];
};

const Conversation = ({ filteredMessages }: Props) => {
  const avatarURL = authStore(
    (state): string | undefined => state.user?.avatarURL,
  );

  const username = authStore(
    ({ user }): string | undefined => `${user?.firstName} ${user?.lastName}`,
  );

  const [editorValue, setEditorValue] = useState<string>('');
  const colorFill = useColorModeValue(
    theme.colors.white,
    colors.secondary[400],
  );

  const messagesToShow = useMemo(
    () => (filteredMessages.length > 0 ? filteredMessages : MESSAGES),
    [filteredMessages],
  );

  return (
    <Box w="full" borderRadius="lg">
      <Flex
        direction="row"
        justifyContent="space-between"
        padding={{ base: '8px', lg: '24px 26px' }}
        bg="background.body.septenary"
      >
        <Heading
          as="h3"
          fontWeight="semibold"
          color="text.primary"
          fontSize="2xl"
          textTransform="capitalize"
        >
          <ChatMemberMemorized
            avatar={avatarURL}
            name={username}
            status="Online"
            statusColor="online"
          />
        </Heading>
      </Flex>

      <Box padding={{ base: '24px 20px', lg: '38px 35px' }}>
        {messagesToShow.map((message): JSX.Element => {
          const { isSend, isAudio, uid, content } = message;

          return (
            <Message
              key={uid}
              content={content}
              isImage={isAudio}
              isOwnerMessage={isSend}
              avatarPosition={
                isSend ? AVATAR_POSITION.AFTER : AVATAR_POSITION.BEFORE
              }
              avatar={IMAGES.CHAT_USER_AVATAR.url}
              localeTime={MESSAGE_TIME}
            />
          );
        })}

        <Flex direction="column" width="full">
          <ReactQuill
            value={editorValue}
            onChange={(value) => setEditorValue(value)}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline'],
                ['image', 'code-block'],
              ],
            }}
            style={{
              width: '100%',
              backgroundColor: colorFill,
            }}
            theme="snow"
          />

          <CustomButton
            w="unset"
            px={4}
            py={2.5}
            leftIcon={<SendIcon />}
            fontSize="md"
            fontWeight="semibold"
            bgColor="primary.600"
            mt={4}
            alignSelf="flex-end"
          >
            Send
          </CustomButton>
        </Flex>
      </Box>
    </Box>
  );
};

const ConversationMemorized = memo(Conversation);

export default ConversationMemorized;
