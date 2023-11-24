import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const Setting = lazy(() => import('@pages/Setting'));

export const settingRoutes: RouteObject = {
  path: ROUTES.SETTING,
  Component: Setting,
};
