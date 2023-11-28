import { ROUTES } from '@constants/routers';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layouts
import { MainLayout } from '@layouts/index';

// Pages
const Dashboard = lazy(() => import('@pages/Home'));
const History = lazy(() => import('@pages/History'));
const MyWallet = lazy(() => import('@pages/MyWallet'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const Setting = lazy(() => import('@pages/Setting'));
const Transaction = lazy(() => import('@pages/Transaction'));
const User = lazy(() => import('@pages/User'));
const NotFound = lazy(() => import('@pages/NotFound'));

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: ROUTES.HISTORY,
        Component: History,
      },
      {
        path: ROUTES.MY_WALLET,
        Component: MyWallet,
      },
      {
        path: ROUTES.LOGIN,
        Component: Login,
      },
      {
        path: ROUTES.REGISTER,
        Component: Register,
      },
      {
        path: ROUTES.SETTING,
        Component: Setting,
      },
      {
        path: ROUTES.TRANSACTION,
        Component: Transaction,
      },
      {
        path: ROUTES.USER,
        Component: User,
      },
      {
        path: ROUTES.NOT_FOUND,
        Component: NotFound,
      },
    ],
  },
]);
