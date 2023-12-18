import { StoryObj, Meta } from '@storybook/react';

// Components
import TotalCard from '@app/components/TotalCard';

// Mocks
import { TOTAL_EARNINGS_MOCK } from '@app/mocks';

const meta: Meta<typeof TotalCard> = {
  title: 'Custom Components/TotalCard',
  tags: ['autodocs'],
  component: TotalCard,
  argTypes: {
    title: {
      description: 'The title of the total card',
    },

    growth: {
      description: 'The growth percentage in the total card',
    },

    total: {
      description: 'The total money of the total card',
    },

    weeklyIncome: {
      description: 'The weekly income data for the chart in total card',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TotalCard>;

export const Default: Story = {
  args: {
    ...TOTAL_EARNINGS_MOCK,
  },
};
