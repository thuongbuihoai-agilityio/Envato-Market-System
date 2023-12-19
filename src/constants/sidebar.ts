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
    destination: '/sign-out',
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
