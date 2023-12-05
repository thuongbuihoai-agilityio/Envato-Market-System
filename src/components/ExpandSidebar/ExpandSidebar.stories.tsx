import type { Meta, StoryObj } from '@storybook/react';

// components
import { ExpandSidebar } from '@components/index';

const meta: Meta<typeof ExpandSidebar> = {
  title: 'Custom Components/ExpandSidebar',

  component: ExpandSidebar,

  argTypes: {
    isOpen: {
      description: 'The state of the ExpandSidebar component',
      defaultValue: true,
    },

    onOpen: {
      description: 'The callback function to open the ExpandSidebar component',
    },

    onClose: {
      description: 'The callback function to close the ExpandSidebar component',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ExpandSidebar>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onOpen: () => {},
    onClose: () => {},
  },
};
