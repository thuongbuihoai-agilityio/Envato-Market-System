import { TEmployee } from '@app/interfaces';

export const USER_MOCK: TEmployee = {
  avatarURL: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
  firstName: 'Abdur',
  lastName: 'Rohman',
  lastActive: '2 days ago',
  workTime: 'Full Time',
  level: 'Senior Level',
  position: 'Finance managers',
  lastPlace: 'Jakarta, Indonesia',
  id: '1',
  createdAt: 3123123,
};

export const USERS_MOCK = [
  {
    avatarURL: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
    firstName: 'Abdur',
    lastName: 'Rohman',
    lastActive: '2 days ago',
    workTime: 'Full Time',
    level: 'Senior Level',
    position: 'Finance managers',
    lastPlace: 'Jakarta, Indonesia',
    id: '1',
    createdAt: 3123123,
  },
  {
    avatarURL: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
    firstName: 'Devon',
    lastName: 'Rohman',
    lastActive: '4 days ago',
    workTime: 'Full Time',
    level: 'Senior Level',
    position: 'Finance managers',
    lastPlace: 'Jakarta, Indonesia',
    id: '2',
    createdAt: 132312321,
  },
];

export const INITIAL_USER = {
  avatarURL: '',
  firstName: '',
  lastName: '',
  lastActive: '',
  workTime: '',
  level: '',
  position: '',
  lastPlace: '',
  id: '',
  createdAt: 0,
};
