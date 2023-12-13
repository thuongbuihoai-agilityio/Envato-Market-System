import { StoryObj, Meta } from '@storybook/react';

// Component
import FilterUser from '.';

const meta: Meta<typeof FilterUser> = {
  title: 'Custom Components/FilterUser',
  tags: ['autodocs'],
  component: FilterUser,

  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterUser>;

export const Default: Story = {
  args: {},
};
