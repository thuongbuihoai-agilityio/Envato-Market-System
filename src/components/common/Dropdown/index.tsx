import { Fragment, memo } from 'react';
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
import { Arrow } from '@assets/icons';

// Constants
import { IMAGES } from '@constants/images';
import { MENU_LIST, MENU_LIST_ICON } from '@constants/menu';

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
                    <Arrow color={colorFill} />
                  </Flex>
                  <Text fontSize="sm" color="text.secondary">
                    {permission}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </MenuButton>
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
            {MENU_LIST_ICON.map(({ id, href, icon, value }) => {
              const Icon = icon || Fragment;
              return (
                <MenuItem
                  key={id}
                  p={3.5}
                  borderRadius="lg"
                  bg="transparent"
                  _hover={{
                    bg: 'background.component.tertiary',
                    color: 'primary.500',
                    svg: { stroke: 'primary.500' },
                  }}
                >
                  <Flex>
                    <Icon color={colorFill} />
                    <Text as={Link} to={href} ml={18} variant="text4Xl">
                      {value}
                    </Text>
                  </Flex>
                </MenuItem>
              );
            })}
            <Divider my={3.5} color="gray.300" />
            {MENU_LIST.map(({ id, value }) => (
              <MenuItem
                key={id}
                p={3.5}
                borderRadius="lg"
                bg="transparent"
                _hover={{
                  bg: 'background.component.tertiary',
                  color: 'primary.500',
                  svg: { stroke: 'primary.500' },
                }}
              >
                <Text as={Link} to="#" variant="text4Xl">
                  {value}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      )}
    </Menu>
  );
};

const Dropdown = memo(DropdownComponent);

export default Dropdown;
