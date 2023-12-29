import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import PinCode from '.';

const meta: Meta<typeof PinCode> = {
  title: 'Custom Components/PinCode',
  tags: ['autodocs'],
  component: PinCode,
  argTypes: {
    isError: {
      description: 'Determine if the PinCode input is invalid',
    },
    onChange: {
      description: 'The on change event handler for the PinCode input',
      action: 'onChange',
    },
    isInvalid: {
      description: 'Determine if the PinCode input is invalid',
    },
    onSubmit: {
      description: 'The on submit event handler for the PinCode input',
    },
    isDisabled: {
      description:
        'Determine if the submit button of PinCode input form is disabled or not',
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
    isError: false,
    onSubmit: (e) => e.preventDefault(),
  },
};
