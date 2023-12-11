import { StoryObj, Meta } from '@storybook/react';

// Components
import { UserIcon } from '@app/assets/icons';

const meta: Meta<typeof UserIcon> = {
  title: 'Icons/User',
  tags: ['autodocs'],
  component: UserIcon,
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = {
  args: {},
};
