import type { Meta, StoryObj } from '@storybook/react';
import Menu from '@components/common/Menu';
const meta: Meta<typeof Menu> = {
  title: 'Custom Components/Menu',
  component: Menu,
  argTypes: {
    title: {
      description: 'The title of the Menu component',
    },
    listItem: {
      description: 'The list item of the menu',
    },
    isMinify: {
      description: 'Determine the mode of the sidebar: expand and mini',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    title: 'Sample Menu Component',
  },
};
