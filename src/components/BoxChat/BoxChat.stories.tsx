import { StoryObj, Meta } from '@storybook/react';

import BoxChat from '.';

const meta: Meta<typeof BoxChat> = {
  title: 'Custom Components/BoxChat',
  component: BoxChat,
  argTypes: {
    content: {
      description: 'Content of the box chat',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxChat>;

export const Default: Story = {
  args: {},
};
