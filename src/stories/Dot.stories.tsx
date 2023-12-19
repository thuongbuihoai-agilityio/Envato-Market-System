import { StoryObj, Meta } from '@storybook/react';

// Components
import { Dot } from '@app/components/Icons';

const meta: Meta<typeof Dot> = {
  title: 'Icons/Dot',
  tags: ['autodocs'],
  component: Dot,
  argTypes: {},
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default: Story = {
  args: {},
};
