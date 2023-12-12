import { StoryObj, Meta } from '@storybook/react';

// Components
import { TransactionIcon } from '@app/assets/icons';

const meta: Meta<typeof TransactionIcon> = {
  title: 'Icons/Transaction',
  tags: ['autodocs'],
  component: TransactionIcon,
};

export default meta;
type Story = StoryObj<typeof TransactionIcon>;

export const Default: Story = {
  args: {},
};
