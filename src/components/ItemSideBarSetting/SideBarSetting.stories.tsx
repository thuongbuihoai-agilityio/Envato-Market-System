import type { Meta, StoryObj } from '@storybook/react';

// components
import SidebarSetting from '@app/components/ItemSideBarSetting';

const meta: Meta<typeof SidebarSetting> = {
  title: 'Custom Components/SidebarSetting',
  tags: ['autodocs'],
  component: SidebarSetting,
};

export default meta;

type Story = StoryObj<typeof SidebarSetting>;

export const Default: Story = {
  args: {},
};
