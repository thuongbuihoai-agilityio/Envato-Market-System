import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Layouts
import MainLayout from '@layouts/MainLayout';

// Routers
import { historyRoutes } from './History';
import { myWalletRoutes } from './MyWallet';
import { registerRoutes } from './Register';
import { settingRoutes } from './Setting';
import { transactionRoutes } from './Transaction';
import { userRoutes } from './User';

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
    historyRoutes,
    myWalletRoutes,
    registerRoutes,
    settingRoutes,
    transactionRoutes,
    userRoutes,
  ],
};
