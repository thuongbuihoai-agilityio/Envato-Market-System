// Icons
import { Account, Logout } from '@app/components/Icons';

// Constants
import { ROUTES, AUTHENTICATION_ROLE } from '.';

export const MENU_LIST_ICON = [
  {
    id: 1,
    href: `/${ROUTES.SETTING}`,
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

export const MENU_LIST = (roleAdmin: string) => [
  {
    ...(roleAdmin === AUTHENTICATION_ROLE.SUPER_ADMIN && {
      id: 2,
      href: `/${ROUTES.USER}`,
      value: 'User',
    }),
  },
];
