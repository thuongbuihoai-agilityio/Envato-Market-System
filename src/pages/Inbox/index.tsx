import {
  Text,
  Flex,
  theme,
  useColorModeValue,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';

// Components
import { ChatMember } from '@app/components/ChatMember';
import { EditIcon } from '@app/components/Icons/Edit';

// Mocks
import { MEMBER_CHAT } from '@app/mocks/member';
import ConversationMemorized from '@app/components/Conversation';

const ChatMemberList = () => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Grid
      templateColumns="repeat(12, minmax(0, 1fr))"
      borderTop="1px solid"
      borderColor="border.tertiary"
    >
      {isMobile ? (
        <GridItem colSpan={12} mb={4} padding={2}>
          <Flex justify="flex-start">
            {MEMBER_CHAT.map(({ id, avatar, statusColor }) => (
              <ChatMember key={id} avatar={avatar} statusColor={statusColor} />
            ))}
          </Flex>
        </GridItem>
      ) : (
        <GridItem
          colSpan={4}
          bg="background.body.septenary"
          pt={6}
          pr={7}
          pl={12}
          pb={10}
          borderRight="1px solid"
          borderColor="border.tertiary"
        >
          <Flex gap={3} align="center">
            <Text
              as="h3"
              color="text.primary"
              fontWeight="semibold"
              fontSize="3xl"
            >
              Messages
              <Text
                as="span"
                color="text.primary"
                fontWeight="semibold"
                fontSize="3xl"
              >
                ({MEMBER_CHAT.length})
              </Text>
            </Text>

            <EditIcon color={colorFill} />
          </Flex>
          <Flex direction="column" gap={6} py={3.5}>
            {MEMBER_CHAT.map(
              ({ id, avatar, name, status, localeTime, icon, statusColor }) => (
                <ChatMember
                  key={id}
                  avatar={avatar}
                  name={name}
                  status={status}
                  localeTime={localeTime}
                  icon={icon}
                  statusColor={statusColor}
                />
              ),
            )}
          </Flex>
        </GridItem>
      )}
      <GridItem colSpan={isMobile ? 12 : 8}>
        <ConversationMemorized />
      </GridItem>
    </Grid>
  );
};

export default ChatMemberList;
