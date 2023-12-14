import { memo } from 'react';

// Components
import {
  Box,
  Flex,
  Heading,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Dropdown,
  IconButton,
  InputField,
  Logo,
  SwitchTheme,
} from '@app/components';

// Assets
import { Bell, Email, Gift, Rotate, Search } from '@app/assets/icons';

// hooks
import { useAuth } from '@app/hooks/useAuth';

interface HeaderProps {
  name?: string;
}

const HeaderComponent = ({ name }: HeaderProps) => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const username = useAuth(
    ({ user }): string | undefined => `${user?.firstName} ${user?.lastName}`,
  );

  const avatarURL = useAuth(
    (state): string | undefined => state.user?.avatarURL,
  );

  return (
    <Flex
      h={{ base: 85, md: 28 }}
      maxW="full"
      bg="background.component.primary"
      alignItems="center"
      px={{ base: 6, xl: 10 }}
      justifyContent="space-between"
    >
      <Flex minW="full" display={{ md: 'none' }} justifyContent="space-between">
        <Logo />
        <Dropdown name="John Doe" permission="Super Admin" src={avatarURL} />
      </Flex>
      <Box display={{ base: 'none', md: 'inline' }} minW={185}>
        <Heading
          as="h1"
          fontSize="3xl"
          fontFamily="primary"
          fontWeight="bold"
          color="text.primary"
        >
          {name}
        </Heading>
        <Text fontSize="sm" color="text.secondary" fontWeight="medium">
          Let’s check your update today
        </Text>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        w={{ base: 500, md: 350, '2xl': 500 }}
        px={4}
      >
        <InputField
          leftIcon={<Search color={colorFill} />}
          placeholder="Search..."
          rightIcon={
            <>
              <Rotate color={colorFill} />
              <Text color="text.primary" pl={1}>
                K
              </Text>
            </>
          }
          onChange={() => {}}
        />
      </Box>
      <Flex
        minW={{ base: 'fit-content', xl: 407, '3xl': 530 }}
        justifyContent={{ base: 'end', xl: 'space-between' }}
      >
        <Flex
          display={{ base: 'none', xl: 'inline-flex' }}
          borderRight="1px"
          borderColor="border.primary"
          height="min-content"
          pr={43}
          minW={310}
          justifyContent="space-between"
        >
          <SwitchTheme />

          <IconButton isNotification>
            <Bell color={colorFill} />
          </IconButton>

          <IconButton isNotification hasNewNotification>
            <Email color={colorFill} />
          </IconButton>

          <IconButton isNotification>
            <Gift color={colorFill} />
          </IconButton>
        </Flex>

        <Box display={{ base: 'none', md: 'inline-flex' }}>
          <Dropdown name={username} permission="Super Admin" src={avatarURL} />
        </Box>
      </Flex>
    </Flex>
  );
};

const Header = memo(HeaderComponent);

export default Header;
