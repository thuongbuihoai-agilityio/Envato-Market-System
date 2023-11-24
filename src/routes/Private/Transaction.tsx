import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const Transaction = lazy(() => import('@pages/Transaction'));

export const transactionRoutes: RouteObject = {
  path: ROUTES.TRANSACTION,
  Component: Transaction,
};
