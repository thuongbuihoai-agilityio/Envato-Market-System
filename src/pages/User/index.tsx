import { memo, useCallback, useMemo, useState } from 'react';

// Components
import { UserCard, UsersTable } from '@components/index';
import { Box, Flex } from '@chakra-ui/react';

// Hooks
import { useEmployee } from '@hooks/index';

// Mocks
import { INITIAL_USER } from '@mocks/index';

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

  return (
    <Flex
      p={12}
      bgColor="background.body.tertiary"
      minH="calc(100vh - 112px)"
      gap={11}
      direction={{ base: 'column', '3xl': 'row' }}
    >
      <Box flex={{ '3xl': 3 }}>
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
