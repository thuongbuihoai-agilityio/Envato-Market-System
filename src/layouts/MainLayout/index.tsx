import { Navigate, Outlet } from 'react-router-dom';

// Hooks
import { useAuth } from '@hooks/useAuth';

// Constants
import { ROUTES } from '@constants/index';

import { Lazy } from '@components/index';

// Types
import { TUser } from '@interfaces/user';

const MainLayout = () => {
  const user = useAuth((state): TUser | null => state.user);

  if (!user) return <Navigate to={ROUTES.LOGIN} />;

  return (
    <Lazy>
      <Outlet />
    </Lazy>
  );
};
export default MainLayout;
