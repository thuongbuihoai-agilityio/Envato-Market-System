import { memo } from 'react';
import { Box, Image, Heading, Flex, Input, Button } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@app/constants';

// Components
import Message from '@app/components/BoxChat/Message';

// Mocks
import { MESSAGE_TIME } from '@app/mocks';

const BoxChatComponent = (): JSX.Element => (
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
            src="icons/plus.svg"
            alt={IMAGES.USER_AVATAR.alt}
            w={3.5}
            h={3.5}
          />
        </Button>
      </Flex>
    </Flex>

    <Box padding={{ base: '24px 20px', lg: '38px 35px' }}>
      <Message
        content="Hi, What can i help you with?"
        avatarPosition="before"
        avatar={IMAGES.CHAT_USER_AVATAR.url}
        localeTime={MESSAGE_TIME}
      />

      <Message
        avatar={IMAGES.CHAT_USER_AVATAR.url}
        isImage
        localeTime={MESSAGE_TIME}
      />

      <Flex direction="row-reverse">
        <Message
          content="Hello, I want to know more about your product"
          avatarPosition="after"
          isOwnerMessage
          avatar={IMAGES.CHAT_USER_AVATAR.url}
          localeTime={MESSAGE_TIME}
        />
      </Flex>

      <Message
        content="Sure, I can help you with that"
        avatarPosition="before"
        avatar={IMAGES.CHAT_USER_AVATAR.url}
        localeTime={MESSAGE_TIME}
      />

      <Flex justify="center" align="center">
        <Box
          border="1px solid"
          borderColor="border.secondary"
          p="0 20px"
          mt={5}
          borderRadius="lg"
          w="full"
        >
          <Flex direction="row" alignItems="center">
            <Image
              src={IMAGES.ATTACH.url}
              alt={IMAGES.ATTACH.alt}
              cursor="pointer"
            />

            <Input
              variant="authentication"
              ml={5}
              type="number"
              _dark={{
                border: 'none',
              }}
              sx={{ border: 'none', padding: 0 }}
              placeholder="Type your message here"
            />

            <Image
              src={IMAGES.MICRO.url}
              alt={IMAGES.MICRO.alt}
              cursor="pointer"
            />
          </Flex>
        </Box>
        <Image
          mt={5}
          ml={5}
          src={IMAGES.SEND.url}
          alt={IMAGES.SEND.alt}
          cursor="pointer"
        />
      </Flex>
    </Box>
  </Box>
);

const BoxChat = memo(BoxChatComponent);

export default BoxChat;
