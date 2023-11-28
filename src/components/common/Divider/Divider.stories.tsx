import { StoryObj, Meta } from '@storybook/react';

// Components
import Divider from '@components/common/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Custom Components/Divider',
  component: Divider,
  argTypes: {
    content: {
      description: 'Content of the divider text field',
    },
  },
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    content: 'Divider Content',
  },
};

export default meta;
