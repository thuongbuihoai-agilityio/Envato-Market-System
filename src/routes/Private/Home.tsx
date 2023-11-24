import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Layouts
import MainLayout from '@layouts/MainLayout';

// Pages
const Dashboard = lazy(() => import('@pages/Home'));

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
