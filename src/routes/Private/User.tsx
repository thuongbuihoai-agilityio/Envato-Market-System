import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const User = lazy(() => import('@pages/User'));

export const userRoutes: RouteObject = {
  path: ROUTES.USER,
  Component: User,
};
