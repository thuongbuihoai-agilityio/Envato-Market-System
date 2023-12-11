import { StoryObj, Meta } from '@storybook/react';

import Message from '.';
import { IMAGES } from '@app/constants/images';

const meta: Meta<typeof Message> = {
  title: 'Custom Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'The message content',
    },

    avatar: {
      description: 'The URL of the message avatar ',
    },

    isImage: {
      description:
        'Indicate the type of the message is image URL to render image',
    },

    avatarPosition: {
      description:
        'Determine whether the position of the avatar is before or after',

      defaultValue: 'before',
    },

    isOwnerMessage: {
      description: 'Indicate the position of the user message',

      defaultValue: false,
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
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
