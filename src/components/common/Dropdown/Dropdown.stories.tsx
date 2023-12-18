import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import Dropdown from '.';

// Constants
import { IMAGES } from '@app/constants/images';

const meta: Meta<typeof Dropdown> = {
  title: 'Custom Components/Dropdown',
  tags: ['autodocs'],
  component: Dropdown,
  argTypes: {
    name: {
      description: 'This is username after login',
    },

    permission: {
      description: 'This is that persons right',
    },
  },
  decorators: [
    (Story) => (
      <Box h="50vh" bg="background.component.primary">
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
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    src: IMAGES.AVATAR.url,
    name: 'John Doe',
    permission: 'Super Admin',
  },
};
