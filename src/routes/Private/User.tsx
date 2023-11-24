import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import User from '@pages/User';

export const userRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.USER,
      Component: User,
    },
  ],
};
