import type { Meta, StoryObj } from '@storybook/react';

// components
import { Sidebar } from '@app/components';

const meta: Meta<typeof Sidebar> = {
  title: 'Custom Components/Sidebar',
  tags: ['autodocs'],
  component: Sidebar,
  argTypes: {
    isOpen: {
      description: 'The state of the Sidebar component',
      defaultValue: true,
    },

    onOpen: {
      description:
        'The callback function to open the ExpandSidebar and close the MiniSidebar component',
    },

    onClose: {
      description:
        'The callback function to close the ExpandSidebar and open the MiniSidebar component',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onOpen: () => {},
    onClose: () => {},
  },
};
