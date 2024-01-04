import { Image } from '@chakra-ui/react';

// Constants
import { IMAGES } from '@app/constants';

// Utils
import { MESSAGE_TIME_FORMAT } from '.';

export const MEMBER_CHAT = [
  {
    id: 'user1',
    avatar: 'https://example.com/avatar1.jpg',
    name: 'Kien Nguyen',
    status: 'Online',
    localeTime: MESSAGE_TIME_FORMAT,
    icon: (
      <Image
        w={5}
        h={5}
        src="icons/file.svg"
        alt={IMAGES.ATTACH.alt}
        fallbackSrc={IMAGES.FALLBACK.url}
      />
    ),
    statusColor: 'online',
  },
  {
    id: 'user2',
    avatar: 'https://example.com/avatar2.jpg',
    name: 'Huy Pham',
    status: 'Away',
    localeTime: MESSAGE_TIME_FORMAT,

    icon: (
      <Image
        w={5}
        h={5}
        src="icons/file.svg"
        alt={IMAGES.ATTACH.alt}
        fallbackSrc={IMAGES.FALLBACK.url}
      />
    ),
    statusColor: 'offline',
  },
];
