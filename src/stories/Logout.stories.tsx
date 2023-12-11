import { StoryObj, Meta } from '@storybook/react';
import { theme } from '@chakra-ui/react';

// Components
import { Logout } from '@app/assets/icons/Logout';

const meta: Meta<typeof Logout> = {
  title: 'Icons/Logout',
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Define the color fill for the Logout Icon',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  component: Logout,
};

export default meta;
type Story = StoryObj<typeof Logout>;

export const Default: Story = {
  args: {
    color: theme.colors.gray[800],
  },
};
