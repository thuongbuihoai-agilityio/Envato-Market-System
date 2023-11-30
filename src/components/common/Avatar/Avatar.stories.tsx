import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Avatar } from '@components/index';

// Constants
import { IMAGES } from '@constants/images';

const meta: Meta<typeof Avatar> = {
  title: 'Custom Components/Avatar',
  component: Avatar,
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
