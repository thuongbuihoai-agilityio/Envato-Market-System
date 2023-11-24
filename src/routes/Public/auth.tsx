import { Center, Spinner } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
const Login = lazy(() => import('@pages/Login'));

export const authRoutes: RouteObject = {
  path: ROUTES.LOGIN,
  Component: Login,
  element: (
    <Suspense
      fallback={
        <Center>
          <Spinner />
        </Center>
      }
    >
      <Outlet />
    </Suspense>
  ),
};
