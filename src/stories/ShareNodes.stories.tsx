import { StoryObj, Meta } from '@storybook/react';

// Components
import { ShareNodes } from '@app/components/Icons';

const meta: Meta<typeof ShareNodes> = {
  title: 'Icons/ShareNodes',
  tags: ['autodocs'],

  component: ShareNodes,
};

export default meta;
type Story = StoryObj<typeof ShareNodes>;

export const Default: Story = {
  args: {},
};
