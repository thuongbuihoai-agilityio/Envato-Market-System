import { Box } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import { Users } from '@components/index';

// Hooks
import { useEmployee } from '@hooks/index';

const UserPage = () => {
  const { data: users = [] } = useEmployee();

  return (
    <Box p={12} bgColor="background.body.tertiary" minH="calc(100vh - 112px)">
      <Users users={users} />
    </Box>
  );
};

const User = memo(UserPage);
export default User;
