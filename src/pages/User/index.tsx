import { Box } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import { UsersTable } from '@components/index';

// Hooks
import { useEmployee } from '@hooks/index';

const UserPage = () => {
  const { data: users = [] } = useEmployee();

  return (
    <Box p={12} bgColor="background.body.tertiary" minH="calc(100vh - 112px)">
      <UsersTable users={users} />
    </Box>
  );
};

const User = memo(UserPage);
export default User;
