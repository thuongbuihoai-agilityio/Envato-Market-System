import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Layouts
import MainLayout from 'src/Layouts/MainLayout';

// Pages
import Dashboard from '@pages/Home';

export const homeRoutes: RouteObject = {
  path: ROUTES.ROOT,
  element: <MainLayout />,
  children: [
    {
      index: true,
      Component: Dashboard,
    },
  ],
};
