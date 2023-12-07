import type { Meta, StoryObj } from '@storybook/react';

// components
import SidebarSetting from '@components/ItemSideBarSetting';

const meta: Meta<typeof SidebarSetting> = {
  title: 'Custom Components/SidebarSetting',

  component: SidebarSetting,
};

export default meta;

type Story = StoryObj<typeof SidebarSetting>;

export const Default: Story = {
  args: {},
};
