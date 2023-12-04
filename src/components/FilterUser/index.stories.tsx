import { StoryObj, Meta } from '@storybook/react';

import TotalList from '.';

const meta: Meta<typeof TotalList> = {
  title: 'Custom Components/FilterUser',
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
  args: {},
};
