import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '.';

// Components

const meta: Meta<typeof SearchBar> = {
  title: 'Custom Components/SearchBar',
  component: SearchBar,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {},
};
