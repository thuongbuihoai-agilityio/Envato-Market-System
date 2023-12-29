import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Notification } from '@app/components';
import { Box } from '@chakra-ui/react';

const meta: Meta<typeof Notification> = {
  title: 'Custom Components/Notification',
  tags: ['autodocs'],
  component: Notification,
  decorators: [
    (Story) => (
      <Box h="40vh" bg="background.component.primary">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {},
};
