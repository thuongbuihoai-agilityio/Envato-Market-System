import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Checkbox } from '@components/index';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: {
      description:
        'The onChange function that handles the isChecked property of the Checkbox',
      action: 'onChange',
    },
    children: {
      description:
        'The children of the Checkbox component, e.g. text, react components, etc.',
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
  args: {
    children: 'Default Checkbox',
  },
};

export const Round: Story = {
  args: {
    variant: 'round',
    children: 'Round Checkbox',
  },
};
