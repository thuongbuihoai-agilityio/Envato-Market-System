import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import Register from '@pages/Register';

export const registerRoutes: RouteObject = {
  path: ROUTES.REGISTER,
  Component: Register,
};
