import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const History = lazy(() => import('@pages/History'));

export const historyRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.HISTORY,
      Component: History,
    },
  ],
};
