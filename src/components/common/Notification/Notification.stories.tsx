import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Notification } from '@app/components';

const meta: Meta<typeof Notification> = {
  title: 'Custom Components/Notification',
  tags: ['autodocs'],
  component: Notification,
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {},
};
