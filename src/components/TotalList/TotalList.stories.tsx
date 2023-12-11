import { StoryObj, Meta } from '@storybook/react';

import TotalList from '.';
import { SPENDING_STATISTICS_MOCK } from '@app/mocks';

const meta: Meta<typeof TotalList> = {
  title: 'Custom Components/TotalList',
  tags: ['autodocs'],
  component: TotalList,
  argTypes: {
    spendingStatistics: {
      description: 'The list of total card to display',
    },
  },
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
