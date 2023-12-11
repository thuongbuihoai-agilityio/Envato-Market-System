import { StoryObj, Meta } from '@storybook/react';

import TableSkeleton from '.';

const meta: Meta<typeof TableSkeleton> = {
  title: 'Custom Components/Skeleton/TableSkeleton',
  tags: ['autodocs'],
  component: TableSkeleton,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableSkeleton>;

export const Default: Story = {};
