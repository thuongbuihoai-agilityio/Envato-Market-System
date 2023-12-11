import { StoryObj, Meta } from '@storybook/react';

// Components
import { MyWalletIcon } from '@app/assets/icons';

const meta: Meta<typeof MyWalletIcon> = {
  title: 'Icons/MyWallet',
  tags: ['autodocs'],
  component: MyWalletIcon,
};

export default meta;
type Story = StoryObj<typeof MyWalletIcon>;

export const Default: Story = {
  args: {},
};
