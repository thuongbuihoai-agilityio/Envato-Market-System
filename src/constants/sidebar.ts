// icons
import {
  DashboardIcon,
  HistoryIcon,
  MyWalletIcon,
  SettingIcon,
  SignOutIcon,
  TransactionIcon,
  UserIcon,
} from '@app/components/Icons';
import { ROUTES } from '.';

export const MENU_ITEM_LIST = [
  {
    id: 1,
    leftIcon: DashboardIcon,
    menuItemContent: 'Dashboard',
    destination: '/',
  },
  {
    id: 2,
    leftIcon: TransactionIcon,
    menuItemContent: 'Transaction',
    destination: `/${ROUTES.TRANSACTION}`,
  },
  {
    id: 3,
    leftIcon: MyWalletIcon,
    menuItemContent: 'My Wallet',
    destination: `/${ROUTES.MY_WALLET}`,
  },
  {
    id: 4,
    leftIcon: UserIcon,
    menuItemContent: 'User',
    destination: `/${ROUTES.USER}`,
  },

  {
    id: 5,
    leftIcon: HistoryIcon,
    menuItemContent: 'History',
    destination: `/${ROUTES.HISTORY}`,
  },
];

export const HELP_ITEM_LIST = [
  {
    id: 6,
    leftIcon: SettingIcon,
    menuItemContent: 'Setting',
    destination: `/${ROUTES.SETTING}`,
  },
];

export const OTHER_ITEM_LIST = [
  {
    id: 7,
    leftIcon: SignOutIcon,
    menuItemContent: 'Sign Out',
    destination: `/${ROUTES.SIGN_OUT}`,
  },
];

export const SIDEBAR = {
  MINI_SIDEBAR_WIDTH: '96px',
  EXPAND_SIDEBAR_WIDTH: '308px',
};

export const EXPAND_SIDEBAR_MENU_LIST = [
  {
    id: 1,
    title: 'Menu',
    listItem: MENU_ITEM_LIST,
  },
  {
    id: 2,
    title: 'Help',
    listItem: HELP_ITEM_LIST,
  },
  {
    id: 3,
    title: 'Others',
    listItem: OTHER_ITEM_LIST,
  },
];
