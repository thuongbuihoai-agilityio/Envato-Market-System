import {
  Text,
  Flex,
  theme,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';

// Components
import { ChatMember } from '@app/components/ChatMember';
import { EditIcon } from '@app/components/Icons/Edit';

// Mocks
import { MEMBER_CHAT } from '@app/mocks/member';

const ChatMemberList = () => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  return (
    <Grid
      pt={6}
      pr={7}
      pl={12}
      pb={10}
      gridTemplateColumns="repeat(12, minmax(0, 1fr))"
    >
      <GridItem colSpan={4}>
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
      <GridItem colSpan={8}></GridItem>
    </Grid>
  );
};

export default ChatMemberList;
