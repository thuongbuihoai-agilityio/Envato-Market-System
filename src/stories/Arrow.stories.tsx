import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Arrow } from '@app/assets/icons';

const meta: Meta<typeof Arrow> = {
  title: 'Icons/Arrow',
  tags: ['autodocs'],
  component: Arrow,
  argTypes: {
    color: {
      description: 'Define the color fill for the Arrow Icon',
    },

    height: {
      description: 'Define the height of the Arrow Icon',
    },

    width: {
      description: 'Define the width of the Arrow Icon',
    },

    rotate: {
      description: 'Define the rotation degree of the Arrow Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Arrow>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
