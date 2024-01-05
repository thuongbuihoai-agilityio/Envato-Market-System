import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import PinCode from '.';
import { useForm } from 'react-hook-form';
import { TPinCodeForm } from '@app/layouts/MainLayout';

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
      <Box
        display="flex"
        justifyContent="center"
        bg="background.component.primary"
      >
        <Box w={320}>
          <Story />
        </Box>
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
  render: function Render(props) {
    const { control } = useForm<TPinCodeForm>({});

    return <PinCode {...props} control={control} />;
  },
};
