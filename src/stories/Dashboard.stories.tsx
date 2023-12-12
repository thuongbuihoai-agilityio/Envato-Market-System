import { StoryObj, Meta } from '@storybook/react';

// Components
import { DashboardIcon } from '@app/assets/icons';

const meta: Meta<typeof DashboardIcon> = {
  title: 'Icons/Dashboard',
  tags: ['autodocs'],
  component: DashboardIcon,
  argTypes: {},
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardIcon>;

export const Default: Story = {
  args: {},
};
