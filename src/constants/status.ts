import { Status } from '@interfaces/status';

export const STATUS_LABEL = {
  [Status.FULL_TIME]: 'primary',
  [Status.PART_TIME]: 'secondary',
  [Status.SENIOR_LEVEL]: 'tertiary',
  [Status.JUNIOR_LEVEL]: 'quaternary',
  [Status.PAID]: 'primary',
  [Status.UN_PAID]: 'secondary',
  [Status.CANCELLED]: 'tertiary',
  [Status.PENDING]: 'quaternary',
  [Status.COMPLETED]: 'primary',
};
