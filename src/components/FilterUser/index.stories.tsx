import { StoryObj, Meta } from '@storybook/react';

// Component
import FilterUser from '.';

// Mocks
import { TRANSACTIONS } from '@mocks/transaction';

const meta: Meta<typeof FilterUser> = {
  title: 'Custom Components/FilterUser',
  tags: ['autodocs'],
  component: FilterUser,
  argTypes: {
    transactions: {
      description: 'The data of users transactions',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterUser>;

export const Default: Story = {
  args: {
    transactions: TRANSACTIONS,
  },
};
