import { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from '@chakra-ui/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Custom Components/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    variant: {
      description: 'Determines the variant of the checkbox.',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Round: Story = {
  args: {
    variant: 'round',
  },
};
