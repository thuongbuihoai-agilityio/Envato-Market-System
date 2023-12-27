import { memo } from 'react';
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
import { IconButton } from '@app/components';
import { Bell } from '@app/components/Icons';

interface NotificationProps {
  colorFill: string;
}

const NotificationComponent = ({ colorFill = '' }: NotificationProps) => (
  <Menu offset={[0, 0]}>
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
        >
          <IconButton isNotification>
            <Bell color={colorFill} />
          </IconButton>
        </MenuButton>
        <MenuList
          zIndex={2}
          w={400}
          border="none"
          borderRadius="lg"
          bg="background.component.primary"
        >
          <MenuItem p={3.5} borderRadius="lg" bg="transparent">
            <Flex flexDirection="column">
              <Flex flexDirection="column">
                <Box>
                  <Text>
                    James Eusobiosend a new payment for SEO writing totaling
                    $199.00
                  </Text>
                  <Text>23 mins ago</Text>
                </Box>
                <Divider />
              </Flex>
              <Flex flexDirection="column">
                <Box>
                  <Text>
                    James Eusobiosend a new payment for SEO writing totaling
                    $199.00
                  </Text>
                  <Text>23 mins ago</Text>
                </Box>
                <Divider />
              </Flex>
              <Flex flexDirection="column">
                <Box>
                  <Text>
                    James Eusobiosend a new payment for SEO writing totaling
                    $199.00
                  </Text>
                  <Text>23 mins ago</Text>
                </Box>
                <Divider />
              </Flex>
              <Flex flexDirection="column">
                <Box>
                  <Text>
                    James Eusobiosend a new payment for SEO writing totaling
                    $199.00
                  </Text>
                  <Text>23 mins ago</Text>
                </Box>
                <Divider />
              </Flex>
              <Flex flexDirection="column">
                <Box>
                  <Text>
                    James Eusobiosend a new payment for SEO writing totaling
                    $199.00
                  </Text>
                  <Text>23 mins ago</Text>
                </Box>
                <Divider />
              </Flex>
            </Flex>
          </MenuItem>
        </MenuList>
      </Box>
    )}
  </Menu>
);

const Notification = memo(NotificationComponent);
export default Notification;
