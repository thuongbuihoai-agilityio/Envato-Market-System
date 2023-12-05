import { StoryObj, Meta } from '@storybook/react';

import TotalList from '.';
import { SPENDING_STATISTICS_MOCK } from '@mocks/index';

const meta: Meta<typeof TotalList> = {
  title: 'Custom Components/TotalList',
  component: TotalList,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TotalList>;

export const Default: Story = {
  args: {
    spendingStatistics: SPENDING_STATISTICS_MOCK,
  },
};
