import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const MyWallet = lazy(() => import('@pages/MyWallet'));

export const myWalletRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.MY_WALLET,
      Component: MyWallet,
    },
  ],
};
