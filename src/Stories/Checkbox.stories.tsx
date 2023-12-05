import { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from '@chakra-ui/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Custom Components/Checkbox',
  component: Checkbox,
  argTypes: {
    variant: {
      description: 'Determines whether variant checkbox.',
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
