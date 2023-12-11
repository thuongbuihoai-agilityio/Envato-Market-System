import type { Meta, StoryObj } from '@storybook/react';

// components
import { MiniSidebar } from '@app/components';

const meta: Meta<typeof MiniSidebar> = {
  title: 'Custom Components/MiniSidebar',
  tags: ['autodocs'],
  component: MiniSidebar,
  argTypes: {
    isOpen: {
      description: 'The state of the MiniSidebar component',
      defaultValue: true,
    },

    onClose: {
      description:
        'The callback function to close the MiniSidebar and open ExpandSidebar component',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof MiniSidebar>;

export const Primary: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
