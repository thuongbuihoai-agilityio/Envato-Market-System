import { StoryObj, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

// Components
import Profile from '@app/components/Profile';

// Constants
import { IMAGES } from '@app/constants';

const meta: Meta<typeof Profile> = {
  title: 'Custom Components/Profile',
  tags: ['autodocs'],
  component: Profile,
  argTypes: {
    url: {
      description: 'The image URL of the Profile component',
    },
    setValue: {
      description: 'The function to set image URL to the submit model',
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

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    url: IMAGES.BIG_AVATAR.url,
  },
};

export default meta;
