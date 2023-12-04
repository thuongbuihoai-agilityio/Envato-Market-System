// icons
import {
  DashboardIcon,
  HistoryIcon,
  MyWalletIcon,
  SettingIcon,
  SignOutIcon,
  TransactionIcon,
  UserIcon,
} from '@assets/icons';

export const MENU_ITEM_LIST = [
  {
    id: 1,
    leftIcon: DashboardIcon,
    menuItemContent: 'Dashboards',
    destination: '/',
  },
  {
    id: 2,
    leftIcon: TransactionIcon,
    menuItemContent: 'Transactions',
    destination: '/transaction',
  },
  {
    id: 3,
    leftIcon: MyWalletIcon,
    menuItemContent: 'My Wallet',
    destination: '/my-wallet',
  },
  {
    id: 4,
    leftIcon: UserIcon,
    menuItemContent: 'User',
    destination: '/user',
  },

  {
    id: 5,
    leftIcon: HistoryIcon,
    menuItemContent: 'History',
    destination: '/history',
  },
];

export const HELP_ITEM_LIST = [
  {
    id: 6,
    leftIcon: SettingIcon,
    menuItemContent: 'Setting',
    destination: '/setting',
  },
];

export const OTHER_ITEM_LIST = [
  {
    id: 7,
    leftIcon: SignOutIcon,
    menuItemContent: 'Sign Out',
    destination: '/',
  },
];

export const SIDEBAR = {
  MINI_SIDEBAR_WIDTH: '96px',
  EXPAND_SIDEBAR_WIDTH: '308px',
};
