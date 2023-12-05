// Icons
import { Account, Logout } from '@assets/icons/index';

// Constants
import { ROUTES } from '.';

export const MENU_LIST_ICON = [
  {
    id: 1,
    href: '#',
    value: 'My profile',
    icon: Account,
  },
  {
    id: 2,
    href: `/${ROUTES.LOGIN}`,
    value: 'Logout',
    icon: Logout,
  },
];

export const MENU_LIST = [
  {
    id: 1,
    value: 'Setting',
  },
  {
    id: 2,
    value: 'User',
  },
];
