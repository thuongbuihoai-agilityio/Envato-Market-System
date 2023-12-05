import { StoryObj, Meta } from '@storybook/react';

import Message from '.';
import { IMAGES } from '@constants/images';

const meta: Meta<typeof Message> = {
  title: 'Custom Components/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    content: 'This is message',
    avatar: IMAGES.USER_AVATAR.url,
    isImage: true,
    avatarPosition: 'before',
    isOwnerMessage: true,
  },
};
