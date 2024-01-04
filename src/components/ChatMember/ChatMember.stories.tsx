import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@chakra-ui/react';

// Components
import { ChatMemberMemorized } from '@app/components/index';

// Constants
import { IMAGES } from '@app/constants';

const meta: Meta<typeof ChatMemberMemorized> = {
  title: 'Custom Components/ChatMember',
  tags: ['autodocs'],
  component: ChatMemberMemorized,
  argTypes: {
    avatar: {
      description: 'The image url to the avatar',
    },
    name: {
      description: 'The name of the user',
    },

    status: {
      description: 'The status of the user',
    },
    localeTime: {
      description: 'The locale time of the user',
    },
    icon: {
      description: 'The icon of the user',
    },
    statusColor: {
      description: 'The status color of the user',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChatMemberMemorized>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    status: 'Online',
    statusColor: 'online',
    localeTime: '10:30',
    icon: (
      <Image
        boxSize={4}
        src={IMAGES.ATTACH.url}
        alt={IMAGES.ATTACH.alt}
        fallbackSrc={IMAGES.FALLBACK.url}
        fallbackStrategy="onError"
      />
    ),
    avatar: 'https://bankcor.quomodosoft.com/assets/u-1-b5f0d6cb.png',
  },
};
