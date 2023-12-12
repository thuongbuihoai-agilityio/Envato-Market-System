import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Gift } from '@app/assets/icons';

const meta: Meta<typeof Gift> = {
  title: 'Icons/Gift',
  tags: ['autodocs'],
  component: Gift,
  argTypes: {
    color: {
      description: 'Define the color fill for the Gift Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Gift>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
