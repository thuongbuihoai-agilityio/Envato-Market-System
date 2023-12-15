import type { Meta, StoryObj } from '@storybook/react';

// components
import SidebarSetting from '@app/components/ItemSideBarSetting';
import { AvatarSetting, Faq } from '@app/assets/icons';

const meta: Meta<typeof SidebarSetting> = {
  title: 'Custom Components/SidebarSetting',
  tags: ['autodocs'],
  component: SidebarSetting,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarSetting>;

export const Primary: Story = {
  args: {
    id: '1',
    title: 'Heading',
    content: 'This is my item',
    activeItemId: '1',
    onClick: () => {},
    children: <AvatarSetting />,
  },
};

export const Secondary: Story = {
  args: {
    id: '1',
    title: 'Heading',
    content: 'This is my item',
    activeItemId: '1',
    onClick: () => {},
    children: <Faq />,
  },
};
