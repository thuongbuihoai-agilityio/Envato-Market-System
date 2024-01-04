import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import PinCode from '.';

const meta: Meta<typeof PinCode> = {
  title: 'Custom Components/PinCode',
  tags: ['autodocs'],
  component: PinCode,
  argTypes: {
    control: {
      description: 'The control pass from react hook form',
    },
    isDisabled: {
      description: 'Determin whether the PinCode is disabled or not',
    },
    onClose: {
      description: 'The close function handler for the PinCode component',
      action: 'onClose',
    },
    onSubmit: {
      description: 'The submit function for the PinCode component',
    },
  },
  decorators: [
    (Story) => (
      <Box bg="background.component.primary">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof PinCode>;

export const Primary: Story = {
  args: {
    isDisabled: false,
    onSubmit: (e) => e.preventDefault(),
  },
};
