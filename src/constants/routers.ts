export const ROUTES = {
  ROOT: '/',
  LOGIN: 'login',
  REGISTER: 'register',
  TRANSACTION: 'transaction',
  MY_WALLET: 'my-wallet',
  USER: 'user',
  HISTORY: 'history',
  SETTING: 'setting',
  FORGOT_PASSWORD: 'forgot-password',
  SIGN_OUT: 'sign-out',
  NOT_FOUND: '*',
};

export const COMMON_ROUTES = [
  {
    id: 1,
    path: ROUTES.NOT_FOUND,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 1,
    path: ROUTES.ROOT,
  },
  {
    id: 2,
    path: ROUTES.TRANSACTION,
  },
  {
    id: 3,
    path: ROUTES.MY_WALLET,
  },
  {
    id: 4,
    path: ROUTES.HISTORY,
  },
  {
    id: 5,
    path: ROUTES.SETTING,
  },
  {
    id: 6,
    path: ROUTES.USER,
  },
];

export const PUBLIC_ROUTES = [
  {
    id: 1,
    path: ROUTES.LOGIN,
  },
  {
    id: 2,
    path: ROUTES.REGISTER,
  },
  {
    id: 3,
    path: ROUTES.FORGOT_PASSWORD,
  },
  {
    id: 4,
    path: ROUTES.SIGN_OUT,
  },
];
