import { TotalListSkeleton } from '@app/components';

// Components
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof TotalListSkeleton> = {
  title: 'Custom Components/Skeleton/TotalListSkeleton',
  tags: ['autodocs'],
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
