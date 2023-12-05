import { StoryObj, Meta } from '@storybook/react';

import RevenueFlow from '.';
import { REVENUE_FLOW_MOCK } from '@mocks/index';

const meta: Meta<typeof RevenueFlow> = {
  title: 'Custom Components/RevenueFlow',
  component: RevenueFlow,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof RevenueFlow>;

export const Default: Story = {
  args: {
    data: REVENUE_FLOW_MOCK,
  },
};
