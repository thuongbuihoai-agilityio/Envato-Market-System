export type TUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: number;
};

export type TCustomer = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  location: string;
};

export type TEmployee = {
  id: string;
  firstName: string;
  lastName: string;
  lastActive: string;
  lastPlace: string;
  workTime: string;
  level: string;
  position: string;
  avatarURL: string;
  createdAt: number;
};
