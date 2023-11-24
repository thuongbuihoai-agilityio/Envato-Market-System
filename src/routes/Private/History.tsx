import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import History from '@pages/History';

export const historyRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.HISTORY,
      Component: History,
    },
  ],
};
