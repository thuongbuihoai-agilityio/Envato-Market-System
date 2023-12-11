import { StoryObj, Meta } from '@storybook/react';

// Components
import { FilterIcon } from '@app/assets/icons';

const meta: Meta<typeof FilterIcon> = {
  title: 'Icons/Filter',
  tags: ['autodocs'],
  component: FilterIcon,
  argTypes: {},
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = {
  args: {
    stroke: '#1D1E24',
  },
};
