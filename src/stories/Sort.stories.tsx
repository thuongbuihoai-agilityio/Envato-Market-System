import { StoryObj, Meta } from '@storybook/react';

// Components
import { Sort } from '@app/assets/icons';

const meta: Meta<typeof Sort> = {
  title: 'Icons/Sort',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Sort Icon',
    },

    height: {
      description: 'Define the height of the Sort Icon',
    },

    width: {
      description: 'Define the width of the Sort Icon',
    },

    opacityLeft: {
      description: 'Define the opacity of the Sort Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  component: Sort,
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Default: Story = {
  args: {
    color: '#969BA0',
  },
};
