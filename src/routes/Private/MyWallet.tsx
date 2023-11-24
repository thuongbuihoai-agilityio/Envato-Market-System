import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import MyWallet from '@pages/MyWallet';

export const myWalletRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.MY_WALLET,
      Component: MyWallet,
    },
  ],
};
