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
  Logo,
  Notification,
  SwitchTheme,
} from '@app/components';

// Assets
import { Email, Gift } from '@app/components/Icons';

// hooks
import { authStore } from '@app/stores';

interface HeaderProps {
  name?: string;
}

const HeaderComponent = ({ name }: HeaderProps) => {
  const colorFill = useColorModeValue(
    theme.colors.gray[800],
    theme.colors.white,
  );

  const username = authStore(
    ({ user }): string | undefined => `${user?.firstName} ${user?.lastName}`,
  );
  const avatarURL = authStore(
    (state): string | undefined => state.user?.avatarURL,
  );

  return (
    <Flex
      h="100%"
      maxW="full"
      bg="background.component.primary"
      alignItems="start"
      px={{ base: 6, xl: 10 }}
      py={6}
      justifyContent="space-between"
      direction={{
        base: 'column',
        default: 'row',
      }}
    >
      <Flex
        display={{ base: 'inline-flex', md: 'none' }}
        justifyContent="space-between"
        w="full"
      >
        <Logo />
        <Box display={{ base: 'block', default: 'none' }}>
          <Dropdown name={username} permission="Super Admin" src={avatarURL} />
        </Box>
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

      <Flex
        gap={43}
        mt={{ base: 3, default: 0 }}
        alignSelf={{
          base: 'end',
          xl: 'baseline',
        }}
      >
        <Flex>
          <Flex
            minW={{ base: 325, sm: 280, md: 310 }}
            justifyContent="space-between"
          >
            <SwitchTheme />

            <Notification colorFill={colorFill} />

            <IconButton>
              <Email color={colorFill} />
            </IconButton>

            <IconButton>
              <Gift color={colorFill} />
            </IconButton>
          </Flex>
          <Box
            display={{ base: 'none', default: 'inline-flex', md: 'none' }}
            ml={4}
          >
            <Dropdown
              name={username}
              permission="Super Admin"
              src={avatarURL}
            />
          </Box>
        </Flex>

        <Box
          display={{ base: 'none', md: 'inline-flex' }}
          borderLeft="1px"
          pl={43}
          borderColor="border.primary"
          height="min-content"
        >
          <Dropdown name={username} permission="Super Admin" src={avatarURL} />
        </Box>
      </Flex>
    </Flex>
  );
};

const Header = memo(HeaderComponent);

export default Header;
