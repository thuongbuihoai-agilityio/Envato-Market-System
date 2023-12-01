import { StoryObj, Meta } from '@storybook/react';

import TotalListSkeleton from '.';

const meta: Meta<typeof TotalListSkeleton> = {
  title: 'Custom Components/Skeleton/TotalListSkeleton',
  component: TotalListSkeleton,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TotalListSkeleton>;

export const Default: Story = {};
