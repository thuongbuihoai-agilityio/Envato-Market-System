import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import Transaction from '@pages/Transaction';

export const transactionRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.TRANSACTION,
      Component: Transaction,
    },
  ],
};
