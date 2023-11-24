import { RouteObject } from 'react-router-dom';

// Constants
import { ROUTES } from '@constants/routers';

// Pages
import Setting from '@pages/Setting';

export const settingRoutes: RouteObject = {
  children: [
    {
      path: ROUTES.SETTING,
      Component: Setting,
    },
  ],
};
