import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
const Dashboard = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const Register = lazy(() => import('@pages/Register'));
const Transaction = lazy(() => import('@pages/Transaction'));
const MyWallet = lazy(() => import('@pages/MyWallet'));
const User = lazy(() => import('@pages/User'));
const History = lazy(() => import('@pages/History'));
const Setting = lazy(() => import('@pages/Setting'));

export const Routers: RouteObject[] = [
  {
    path: ROUTES.HOMEPAGE,
    element: <Dashboard />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.TRANSACTION,
    element: <Transaction />,
  },
  {
    path: ROUTES.MY_WALLET,
    element: <MyWallet />,
  },
  {
    path: ROUTES.USER,
    element: <User />,
  },
  {
    path: ROUTES.HISTORY,
    element: <History />,
  },
  {
    path: ROUTES.SETTING,
    element: <Setting />,
  },
];
