import { StoryObj, Meta } from '@storybook/react';

import OverallBalance from '.';
import { OVERALL_BALANCE_MOCK } from '@mocks/index';

const meta: Meta<typeof OverallBalance> = {
  title: 'Custom Components/OverallBalance',
  component: OverallBalance,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof OverallBalance>;

export const Default: Story = {
  args: OVERALL_BALANCE_MOCK,
};

export const Loading: Story = {
  args: {
    ...OVERALL_BALANCE_MOCK,
    isLoading: true,
  },
};
