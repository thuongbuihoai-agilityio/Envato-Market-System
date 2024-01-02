import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';

// components
import { ExpandSidebar, MiniSidebar } from '@app/components';
import { TMenuItem } from '@app/components/common/Menu';

// Constants
import {
  HELP_ITEM_LIST,
  AUTHENTICATION_ROLE,
  MENU_ITEM_LIST,
} from '@app/constants';

// Stores
import { authStore } from '@app/stores';

// Interfaces
import { TUserDetail } from '@app/interfaces';

export type SidebarProps = {
  menuItem?: TMenuItem[];
  roleAdmin?: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
};

const Sidebar = ({ onClose, onOpen, isOpen }: SidebarProps) => {
  const { user } = authStore();

  const { role = AUTHENTICATION_ROLE.MEMBER } = user as TUserDetail;
  const menuItem = useMemo(() => MENU_ITEM_LIST(role), [role]);

  return (
    <>
      <ExpandSidebar
        roleAdmin={role}
        menuItem={[...(menuItem as TMenuItem[]), ...HELP_ITEM_LIST]}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={!isOpen}
      />
      <MiniSidebar
        roleAdmin={role}
        menuItem={[...(menuItem as TMenuItem[]), ...HELP_ITEM_LIST]}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

const SideBarComponent = memo(Sidebar, isEqual);

export default SideBarComponent;
