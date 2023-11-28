import { StoryObj, Meta } from '@storybook/react';

// Components
import Divider from '@components/common/Divider';

const meta: Meta<typeof Divider> = {
  component: Divider,
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    content: 'Divider Content',
  },
};

export default meta;
