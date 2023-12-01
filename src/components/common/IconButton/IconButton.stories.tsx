import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { IconButton } from '@components/index';
import { Theme, Email as EmailIcon } from '@assets/icons';

const meta: Meta<typeof IconButton> = {
  title: 'Custom Components/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      description: 'Children is icon',
    },
  },
  parameters: {
    isEmail: {
      description: 'If isEmail is true then background color is red',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <Theme color={`${theme.colors.gray[800]}`} />,
  },
};

export const Notification: Story = {
  args: {
    children: <Theme color={`${theme.colors.gray[800]}`} />,
    isNotification: true,
  },
};

export const Email: Story = {
  args: {
    children: <EmailIcon color={`${theme.colors.gray[800]}`} />,
    isNotification: true,
    hasNewNotification: true,
  },
};
