import { memo, useCallback, useMemo, useState } from 'react';

// Components
import { Button, InputField, UserCard, UsersTable } from '@components/index';
import { Box, Flex } from '@chakra-ui/react';

// Hooks
import { useEmployee } from '@hooks/index';

// Mocks
import { INITIAL_USER } from '@mocks/index';
import { Search } from '@assets/icons';

const UserPage = () => {
  const { data: users = [] } = useEmployee();
  const [userId, setUserId] = useState<string | null>(null);

  const handleClickUser = useCallback((id: string) => {
    setUserId(id);
  }, []);

  const user = useMemo(
    () => (userId ? users.find((user) => user.id === userId) : users[0]),
    [userId, users],
  );

  const handleChange = () => {
    //TODO: Update later
  };

  return (
    <Flex
      p={12}
      bgColor="background.body.tertiary"
      minH="calc(100vh - 112px)"
      gap={11}
      direction={{ base: 'column', '3xl': 'row' }}
    >
      <Box flex={{ '3xl': 3 }}>
        <Flex
          p={4}
          rounded="lg"
          bg="background.body.quaternary"
          mb={8}
          alignItems="center"
        >
          <InputField
            flex={4}
            variant="noFocus"
            leftIcon={<Search color="#94A3B8" />}
            placeholder="Search..."
            sx={{
              svg: {
                position: 'absolute',
              },
            }}
            onChange={handleChange}
          />
          <Button
            size="md"
            bg="background.component.quaternary"
            fontWeight="medium"
            sx={{
              py: 7,
              borderRadius: 'lg',
              display: { base: 'none', md: 'inline-flex' },
            }}
          >
            Search
          </Button>
        </Flex>
        <UsersTable users={users} onClickUser={handleClickUser} />
      </Box>
      <Box flex={1} pt={20}>
        <UserCard user={user || INITIAL_USER} />
      </Box>
    </Flex>
  );
};

const User = memo(UserPage);
export default User;
