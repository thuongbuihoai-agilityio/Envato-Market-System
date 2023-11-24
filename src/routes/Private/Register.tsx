import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Pages
const Register = lazy(() => import('@pages/Register'));

export const registerRoutes: RouteObject = {
  path: ROUTES.REGISTER,
  Component: Register,
};
