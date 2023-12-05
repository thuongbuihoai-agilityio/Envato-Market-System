import { StoryObj, Meta } from '@storybook/react';

import Efficiency from '.';
import { EFFICIENCY_MOCK } from '@mocks/spending';

const meta: Meta<typeof Efficiency> = {
  title: 'Custom Components/Efficiency',
  component: Efficiency,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Efficiency>;

export const Default: Story = {
  args: EFFICIENCY_MOCK,
};

export const ExchangeRate: Story = {
  args: {
    ...EFFICIENCY_MOCK,
    isExchangeRate: true,
  },
};
