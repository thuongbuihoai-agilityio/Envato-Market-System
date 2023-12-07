import { StoryObj, Meta } from '@storybook/react';

// Component
import FilterUser from '.';

// Mocks
import { TRANSACTIONS } from '@mocks/transaction';

const meta: Meta<typeof FilterUser> = {
  title: 'Custom Components/FilterUser',
  component: FilterUser,
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
