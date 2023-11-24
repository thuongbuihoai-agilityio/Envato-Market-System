import { createBrowserRouter } from 'react-router-dom';

// Routes
import { privateRoutes } from './Private';
import { publicRoutes } from './Public';

// Constants
import { ROUTES } from '@constants/routers';

export const routes = createBrowserRouter([...privateRoutes, ...publicRoutes], {
  basename: ROUTES.HOMEPAGE,
});
