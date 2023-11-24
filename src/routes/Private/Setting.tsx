import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const Setting = lazy(() => import('@pages/Setting'));

export const settingRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.SETTING,
      Component: Setting,
    },
  ],
};
