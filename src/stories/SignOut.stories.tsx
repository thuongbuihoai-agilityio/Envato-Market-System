import { StoryObj, Meta } from '@storybook/react';

// Components
import { SignOutIcon } from '@app/assets/icons';

const meta: Meta<typeof SignOutIcon> = {
  title: 'Icons/SignOut',
  tags: ['autodocs'],
  component: SignOutIcon,
};

export default meta;
type Story = StoryObj<typeof SignOutIcon>;

export const Default: Story = {
  args: {},
};
