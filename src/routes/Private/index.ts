import { RouteObject } from 'react-router-dom';

// Routes
import { homeRoutes } from './Home';
import { historyRoutes } from './History';
import { myWalletRoutes } from './MyWallet';
import { registerRoutes } from './Register';
import { settingRoutes } from './Setting';
import { transactionRoutes } from './Transaction';
import { userRoutes } from './User';

export const privateRoutes: RouteObject[] = [
  homeRoutes,
  historyRoutes,
  myWalletRoutes,
  registerRoutes,
  settingRoutes,
  transactionRoutes,
  userRoutes,
];
