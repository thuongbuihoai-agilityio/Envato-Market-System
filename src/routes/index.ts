import { ROUTES } from '@app/constants/routers';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Layouts
import { MainLayout } from '@app/layouts';

// HOCs
import { withLazy, withNeedLogin } from '@app/hocs';

// Pages
const Dashboard = lazy(() => import('@app/pages/Home'));
const History = lazy(() => import('@app/pages/History'));
const MyWallet = lazy(() => import('@app/pages/MyWallet'));
const Login = lazy(() => import('@app/pages/Login'));
const Register = lazy(() => import('@app/pages/Register'));
const Setting = lazy(() => import('@app/pages/Setting'));
const Transaction = lazy(() => import('@app/pages/Transaction'));
const User = lazy(() => import('@app/pages/User'));
const NotFound = lazy(() => import('@app/pages/NotFound'));
const ComingSoon = lazy(() => import('@app/pages/ComingSoon'));

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    Component: withNeedLogin(MainLayout),
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
  {
    path: `/${ROUTES.LOGIN}`,
    Component: withLazy(Login),
  },
  {
    path: `/${ROUTES.REGISTER}`,
    Component: withLazy(Register),
  },
  {
    path: `/${ROUTES.FORGOT_PASSWORD}`,
    Component: withLazy(ComingSoon),
  },
]);
