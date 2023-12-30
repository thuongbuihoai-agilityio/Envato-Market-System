import { memo } from 'react';

// Components
import {
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@app/components';
import { Bell } from '@app/components/Icons';

// Constants
import { NOTIFICATION_LIST } from '@app/constants';
import { useNotification } from '@app/hooks';

interface NotificationProps {
  colorFill: string;
}

const NotificationComponent = ({ colorFill = '' }: NotificationProps) => {
  const {
    quantity,
    hasNewNotification,
    handleDeleteNotice,
    handleUpdateMarkRead,
  } = useNotification(NOTIFICATION_LIST);

  return (
    <Menu placement="auto" closeOnSelect={false}>
      {({ isOpen }) => (
        <Box>
          <MenuButton
            as={Button}
            p={0}
            bg="none"
            _hover={{
              bg: 'none',
            }}
            _active={{
              bg: 'none',
            }}
            isActive={isOpen}
            lineHeight="inherit"
          >
            <IconButton
              hasNewNotification={hasNewNotification}
              quantityNotification={quantity}
            >
              <Bell color={colorFill} />
            </IconButton>
          </MenuButton>
          <MenuList
            mt={5}
            w={{ base: 300, lg: 435 }}
            overflow="hidden"
            px={3.5}
            border="none"
            borderRadius="lg"
            bg="background.component.primary"
          >
            <Text fontSize="xl" fontWeight="bold" m={4}>
              Notifications
            </Text>
            <Flex
              flexDirection="column"
              mt={3}
              maxH={320}
              overflowY="scroll"
              css={{
                '&::-webkit-scrollbar': {
                  width: 2,
                },
                '&::-webkit-scrollbar-track': {
                  width: 2,
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'gray',
                  borderRadius: '24px',
                },
              }}
            >
              {NOTIFICATION_LIST.map((item) => {
                const handleDeleteNotification = () =>
                  handleDeleteNotice(item.id);
                const handleUpdateNotification = () =>
                  handleUpdateMarkRead(item.id);

                return (
                  <MenuItem
                    key={item.id}
                    py={0}
                    bg={
                      item.isMarkRead
                        ? 'transparent'
                        : 'background.component.tertiary'
                    }
                    _hover={{
                      bg: 'background.component.tertiary',
                      color: 'text.currencyColor',
                    }}
                    onClick={handleUpdateNotification}
                  >
                    <Flex flexDirection="column">
                      <Flex alignItems="center">
                        <Box>
                          <Text fontSize="sm" color="text.nonary" mt={2}>
                            <Text
                              as="span"
                              fontWeight="bold"
                              pr={1}
                              fontSize="sm"
                            >
                              {item.sender}
                            </Text>
                            {item.description}
                            <Text
                              as="span"
                              fontWeight="bold"
                              px={1}
                              fontSize="sm"
                            >
                              {item.receiver}
                            </Text>
                            totaling
                            <Text
                              as="span"
                              color="text.currencyColor"
                              px={1}
                              fontSize="sm"
                            >
                              {item.sentMoney}
                            </Text>
                          </Text>
                          <Text
                            fontSize="xs"
                            color="text.textTime"
                            mt={2}
                            mb={3}
                          >
                            {item.time}
                          </Text>
                        </Box>
                        <DeleteIcon
                          data-testid="delete-icon"
                          mr={5}
                          onClick={handleDeleteNotification}
                        />
                      </Flex>
                      <Divider color="gray.300" />
                    </Flex>
                  </MenuItem>
                );
              })}
            </Flex>
          </MenuList>
        </Box>
      )}
    </Menu>
  );
};

const Notification = memo(NotificationComponent);
export default Notification;
