import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  theme,
  useColorModeValue,
} from '@chakra-ui/react';

// Assets
import { Arrow, Email, Logout, User } from '@assets/icons';

// Constants
import { IMAGES } from '@constants/images';

// Components
import { Avatar } from '@components/index';

interface DropdownProps {
  name?: string;
  permission?: string;
}

const DropdownComponent = ({ name = '', permission = '' }: DropdownProps) => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const renderMenuItem = useMemo(() => {
    return (
      <MenuList
        data-testid="TestDropdown"
        position="absolute"
        left="-119px"
        px={3}
        py={2}
        mt={8}
        w={300}
        border="none"
        borderRadius="lg"
        bg="dark"
      >
        <MenuItem
          p="14px"
          borderRadius="lg"
          bg="transparent"
          _hover={{
            bg: 'background.component.tertiary',
            color: 'primary.500',
            svg: { stroke: 'primary.500' },
          }}
        >
          <Flex>
            <User colorFill={colorFill} />
            <Text as={Link} to="#" ml={18} variant="text4Xl">
              My Profile
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem
          p="14px"
          borderRadius="lg"
          bg="transparent"
          _hover={{
            bg: 'background.component.tertiary',
            color: 'primary.500',
            svg: { stroke: 'primary.500' },
          }}
        >
          <Flex>
            <Email colorFill={colorFill} />
            <Text as={Link} to="#" ml={18} variant="text4Xl">
              Inbox
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem
          p="14px"
          borderRadius="lg"
          bg="transparent"
          _hover={{
            bg: 'background.component.tertiary',
            color: 'primary.500',
            path: { stroke: 'primary.500' },
          }}
        >
          <Flex>
            <Logout colorFill={colorFill} />
            <Text as={Link} to="#" ml={18} variant="text4Xl">
              Logout
            </Text>
          </Flex>
        </MenuItem>
        <Divider my="14px" color="gray.300" />
        <MenuItem
          p="14px"
          borderRadius="lg"
          bg="transparent"
          _hover={{
            bg: 'background.component.tertiary',
            color: 'primary.500',
            svg: { stroke: 'primary.500' },
          }}
        >
          <Text as={Link} to="#" variant="text4Xl">
            Setting
          </Text>
        </MenuItem>
        <MenuItem
          p="14px"
          borderRadius="lg"
          bg="transparent"
          _hover={{
            bg: 'background.component.tertiary',
            color: 'primary.500',
            svg: { stroke: 'primary.500' },
          }}
        >
          <Text as={Link} to="#" variant="text4Xl">
            User
          </Text>
        </MenuItem>
      </MenuList>
    );
  }, [colorFill]);

  return (
    <Menu>
      {({ isOpen }) => (
        <Box position="relative" float="right">
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
            <Flex alignItems="center">
              <Avatar src={IMAGES.AVATAR.url} />
              <Box display={{ base: 'none', '2xl': 'block' }}>
                <Flex flexDirection="column" alignItems="start" ml={18}>
                  <Flex alignItems="center">
                    <Text mr="15px" fontWeight="bold">
                      {name}
                    </Text>
                    <Arrow colorFill={colorFill} />
                  </Flex>
                  <Text fontSize="sm" color="text.secondary">
                    {permission}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </MenuButton>
          {renderMenuItem}
        </Box>
      )}
    </Menu>
  );
};

const Dropdown = memo(DropdownComponent);

export default Dropdown;
