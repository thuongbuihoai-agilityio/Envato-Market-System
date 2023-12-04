import { StoryObj, Meta } from '@storybook/react';

import TotalCard from '.';
import { TOTAL_EARNINGS_MOCK } from '@mocks/index';

const meta: Meta<typeof TotalCard> = {
  title: 'Custom Components/TotalCard',
  component: TotalCard,
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
