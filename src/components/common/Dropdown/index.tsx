import { Fragment, lazy, memo } from 'react';
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
import { Lazy } from '@app/components';

// Assets
import { Arrow } from '@app/components/Icons';

// Constants
import { MENU_LIST, MENU_LIST_ICON } from '@app/constants/menu';

import { useAuth } from '@app/hooks/useAuth';

// Lazy loading components
const Avatar = lazy(() => import('@app/components/common/Avatar'));

interface DropdownProps {
  src?: string;
  name?: string;
  permission?: string;
  offsetX?: number;
  offsetY?: number;
}

const UserDropdownMenu = ({
  src = '',
  name = '',
  permission = '',
  offsetX = 0,
  offsetY = 10,
}: DropdownProps) => {
  const { signOut } = useAuth();
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  return (
    <Menu offset={[offsetX, offsetY]}>
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
            <Flex alignItems="center">
              <Lazy>
                <Avatar src={src} />
              </Lazy>
              <Box display={{ base: 'none', '3xl': 'inline' }}>
                <Flex flexDirection="column" alignItems="start" ml={18}>
                  <Flex alignItems="center">
                    <Text mr="15px" w={68} fontWeight="bold" variant="text5Xl">
                      {name}
                    </Text>
                    <Arrow color={colorFill} />
                  </Flex>
                  <Text
                    fontSize="sm"
                    w={20}
                    color="text.secondary"
                    variant="text5Xl"
                  >
                    {permission}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList
            data-testid="TestDropdown"
            position="relative"
            zIndex={2}
            px={3}
            py={2}
            mt={{ md: 4 }}
            w={300}
            border="none"
            borderRadius="lg"
            bg="background.component.primary"
          >
            {MENU_LIST_ICON.map(({ id, href, icon, value }) => {
              const Icon = icon || Fragment;
              return (
                <MenuItem
                  key={id}
                  as={Link}
                  to={href}
                  p={3.5}
                  aria-label={`menu-icon-${value}`}
                  borderRadius="lg"
                  bg="transparent"
                  _hover={{
                    bg: 'background.component.tertiary',
                    color: 'primary.500',
                    svg: { stroke: 'primary.500' },
                    path: { stroke: 'primary.500' },
                    borderColor: 'transparent',
                  }}
                  _focus={{
                    outline: 'none',
                  }}
                  {...(id === 2 && {
                    onClick: signOut,
                  })}
                >
                  <Flex>
                    <Icon color={colorFill} />
                    <Text ml={18} variant="text4Xl">
                      {value}
                    </Text>
                  </Flex>
                </MenuItem>
              );
            })}
            <Divider my={3.5} color="gray.300" />
            {MENU_LIST.map(({ id, value, href }) => (
              <MenuItem
                key={id}
                p={3.5}
                borderRadius="lg"
                bg="transparent"
                as={Link}
                to={href}
                aria-label={`menu-item-${value}`}
                _hover={{
                  bg: 'background.component.tertiary',
                  color: 'primary.500',
                  svg: { stroke: 'primary.500' },
                  borderColor: 'transparent',
                }}
                _focus={{
                  outline: 'none',
                }}
              >
                <Text variant="text4Xl">{value}</Text>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      )}
    </Menu>
  );
};

const Dropdown = memo(UserDropdownMenu);

export default Dropdown;
