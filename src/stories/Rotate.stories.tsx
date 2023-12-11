import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Rotate } from '@app/assets/icons';

const meta: Meta<typeof Rotate> = {
  title: 'Icons/Rotate',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Rotate Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  component: Rotate,
};

export default meta;
type Story = StoryObj<typeof Rotate>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
