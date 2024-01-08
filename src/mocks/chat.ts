// Constants
import { AVATAR_POSITION, IMAGES } from '@app/constants';
import { MESSAGE_TIME } from '.';

// TODO: Update later
export const USER_CHATS = [
  {
    uid: 'user',
    isSend: false,
    isAudio: false,
    content: 'Hi, I need more information',
    avatarPosition: AVATAR_POSITION.BEFORE,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 1000,
  },

  {
    uid: 'user',
    isSend: false,
    isAudio: false,
    content: 'Hello, I want to know more about your product',
    avatarPosition: AVATAR_POSITION.BEFORE,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 3000,
  },

  {
    uid: 'user',
    isSend: false,
    isAudio: false,
    content: 'Hello, I want to know more about your product',
    avatarPosition: AVATAR_POSITION.BEFORE,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 6000,
  },

  {
    uid: 'admin',
    isSend: true,
    isAudio: false,
    content: 'Hi, i am here for help',
    avatarPosition: AVATAR_POSITION.AFTER,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 2000,
  },

  {
    uid: 'admin',
    isSend: true,
    isAudio: false,
    content: 'Sure, I can help you with that',
    avatarPosition: AVATAR_POSITION.BEFORE,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 4000,
  },
  {
    uid: 'admin',
    isSend: true,
    isAudio: false,
    content: 'Sure, I can help you with that',
    avatarPosition: AVATAR_POSITION.BEFORE,
    avatar: IMAGES.CHAT_USER_AVATAR.url,
    localeTime: MESSAGE_TIME + 7000,
  },
];

export const MEMBER_CHATS = [
  { uid: 'admin', name: 'Admin' },
  { uid: 'user1', name: 'User 1' },
];
