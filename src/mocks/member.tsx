import { Image } from '@chakra-ui/react';

// Components
import { MESSAGE_TIME_FORMAT } from '.';

// Constants
import { IMAGES } from '@app/constants';

export const MEMBER_CHAT = [
  {
    id: 1,
    avatar: 'https://example.com/avatar1.jpg',
    name: 'John Doe',
    status: 'Online',
    localeTime: MESSAGE_TIME_FORMAT,
    icon: (
      <Image
        src="https://example.com/icon1.png"
        alt="Icon 1"
        fallbackSrc={IMAGES.FALLBACK.url}
        fallbackStrategy="onError"
      />
    ),
    statusColor: 'online',
  },
  {
    id: 2,
    avatar: 'https://example.com/avatar2.jpg',
    name: 'Jane Doe',
    status: 'Away',
    localeTime: MESSAGE_TIME_FORMAT,
    icon: (
      <Image
        src="https://example.com/icon2.png"
        alt="Icon 2"
        fallbackSrc={IMAGES.FALLBACK.url}
        fallbackStrategy="onError"
      />
    ),
    statusColor: 'offline',
  },
];
