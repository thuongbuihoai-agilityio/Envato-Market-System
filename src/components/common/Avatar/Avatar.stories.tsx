import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Avatar } from '@app/components';

// Constants
import { IMAGES } from '@app/constants/images';

const meta: Meta<typeof Avatar> = {
  title: 'Custom Components/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  argTypes: {
    src: {
      description: 'The image url to the avatar',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: IMAGES.AVATAR.url,
  },
};
