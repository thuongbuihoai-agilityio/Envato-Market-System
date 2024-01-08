import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Image,
  Heading,
  Flex,
  Button,
  VStack,
  Text,
  FormControl,
} from '@chakra-ui/react';

// Constants
import { AVATAR_POSITION, IMAGES } from '@app/constants';

// Components
import Message from '@app/components/BoxChat/Message';
import { InputField } from '@app/components';
import { AttachIcon, MicroIcon, SendIcon } from '@app/components/Icons';

// Mocks
import { MESSAGE_TIME, USER_CHATS } from '@app/mocks';

// Stores
import { authStore } from '@app/stores';

export type TChat = {
  messages: string;
  isSend: boolean;
  isAudio: boolean;
  uid: string;
  content: string;
};

const BoxChatComponent = () => {
  const {
    control,
    formState: {
      errors: { root },
    },
    watch,
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<TChat>({
    defaultValues: {
      messages: '',
    },
    mode: 'onBlur',
  });

  const [listMessages, setListMessages] = useState(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    return storedMessages ? JSON.parse(storedMessages) : USER_CHATS;
  });

  const handleSendMessage: SubmitHandler<TChat> = (event) => {
    const newMessageContent = event.messages;

    const newMessage = {
      uid: 'admin',
      isSend: true,
      isAudio: false,
      content: newMessageContent,
      avatarPosition: AVATAR_POSITION.AFTER,
      avatar: IMAGES.CHAT_USER_AVATAR.url,
      localeTime: MESSAGE_TIME + 5000,
    };

    const updatedMessages = [...listMessages, newMessage];
    setListMessages(updatedMessages);

    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

    reset();
  };

  const adminAvatarURL = authStore(
    (state): string | undefined => state.user?.avatarURL,
  );

  const handleClearErrorMessage = useCallback(
    (field: keyof TChat, onChange: (value: string) => void) =>
      (data: string) => {
        clearErrors(field);
        onChange(data);
      },
    [clearErrors],
  );

  const [isSubmit] = useState<boolean>(false);
  const isDisabledSubmitBtn: boolean =
    isSubmit || !Object.values(watch()).every((value) => value);

  return (
    <Box w="full" bg="background.body.quaternary" borderRadius="lg">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        justify="center"
        borderBottom="1px solid"
        borderBottomColor="border.tertiary"
        padding="24px 26px"
      >
        <Heading
          as="h3"
          fontWeight="semibold"
          color="text.primary"
          fontSize="2xl"
          textTransform="capitalize"
        >
          team chat
        </Heading>

        <Flex gap={5}>
          <Image
            src={IMAGES.USER_AVATAR.url}
            alt={IMAGES.USER_AVATAR.alt}
            fallbackSrc={IMAGES.USER.url}
            fallbackStrategy="onError"
            w="52px"
            h={8}
          />

          <Button
            aria-label="btn-icon-plus"
            bg="secondary.800"
            w={9}
            h={9}
            borderRadius="50%"
          >
            <Image
              src={IMAGES.PLUS.url}
              alt={IMAGES.PLUS.alt}
              fallbackSrc={IMAGES.FALLBACK.url}
              fallbackStrategy="onError"
              w={3.5}
              h={3.5}
            />
          </Button>
        </Flex>
      </Flex>

      <Box padding={{ base: '24px 20px', lg: '38px 35px' }}>
        {listMessages.map((message: TChat): JSX.Element => {
          const { isSend, isAudio, uid, content } = message;
          const avatar =
            uid === 'admin' ? adminAvatarURL : IMAGES.CHAT_USER_AVATAR.url;

          return (
            <Message
              key={uid}
              content={content}
              isAudio={isAudio}
              isOwnerMessage={isSend}
              avatarPosition={
                isSend ? AVATAR_POSITION.AFTER : AVATAR_POSITION.BEFORE
              }
              avatar={avatar}
              localeTime={MESSAGE_TIME}
            />
          );
        })}
        <VStack as="form" onSubmit={handleSubmit(handleSendMessage)}>
          <Flex justify="center" align="center" w="full">
            <Controller
              control={control}
              name="messages"
              render={({
                field: { onChange, ...rest },
                fieldState: { error },
              }) => (
                <FormControl>
                  <Flex
                    direction="row"
                    alignItems="center"
                    justify="flex-start"
                  >
                    <InputField
                      placeholder="Type your message"
                      leftIcon={<AttachIcon />}
                      rightIcon={<MicroIcon />}
                      {...rest}
                      isError={!!error}
                      errorMessages={error?.message}
                      isDisabled={isSubmit}
                      onChange={handleClearErrorMessage('messages', onChange)}
                    />
                  </Flex>
                </FormControl>
              )}
            />
            <Text color="red" textAlign="center" py={2} h={10}>
              {root?.message}
            </Text>
            <Button
              backgroundColor="transparent"
              borderRadius="none"
              role="button"
              ml={5}
              w={5}
              h={18}
              cursor="pointer"
              type="submit"
              isDisabled={isDisabledSubmitBtn}
            >
              <SendIcon color="primary.300" />
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

const BoxChat = memo(BoxChatComponent);

export default BoxChat;
