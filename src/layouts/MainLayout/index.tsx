import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';

// Hooks
import { useAuth } from '@hooks/useAuth';

// Constants
import { ROUTES } from '@constants/index';

// Types
import { TUser } from '@interfaces/user';

const MainLayout = () => {
  const user = useAuth((state): TUser | null => state.user);

  if (!user) return <Navigate to={ROUTES.LOGIN} />;

  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
};
export default MainLayout;
