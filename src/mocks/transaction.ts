import {
  PAYMENT_STATUS_ENUM,
  TRANSACTION_STATUS_ENUM,
} from '@app/constants/transaction';
import { TTransaction } from '@app/interfaces';

export const TRANSACTIONS: TTransaction[] = [
  {
    id: '1701513537051',
    customer: {
      customerId: null,
      customerName: 'Devon Lane',
      avatar:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
      email: 'devon@mail.com',
      address: 'Philadelphia, USA',
    },
    amount: '101',
    currency: '$',
    name: 'Devon Lane 1',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
    date: '1681982541000',
    location: 'Philadelphia, USA',
    paymentStatus: PAYMENT_STATUS_ENUM.PAID,
    transactionStatus: TRANSACTION_STATUS_ENUM.CANCELED,
  },
  {
    id: '1701513537052',
    customer: {
      customerId: '2701513537052',
      customerName: 'Bessie Cooper',
      avatar:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
      email: 'bessie@mail.com',
      address: 'Philadelphia, USA',
    },
    amount: '101',
    currency: '$',
    name: 'Bessie Cooper 1',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
    date: '1681982541000',
    location: 'Philadelphia, USA',
    paymentStatus: PAYMENT_STATUS_ENUM.PAID,
    transactionStatus: TRANSACTION_STATUS_ENUM.COMPLETED,
  },
  {
    id: '1701513537053',
    customer: {
      customerId: '2701513537053',
      customerName: 'Zepeda lorna',
      avatar:
        'https://static.nike.com/a/images/t_PDP_1280_v1/ceee380f/dunk-low-shoes-t9dFBx.png',
      email: 'dianne@mail.com',
      address: 'Philadelphia, USA',
    },
    amount: '101',
    currency: '$',
    name: 'Zepeda lorna 1',
    image:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/.png',
    location: 'Philadelphia, USA',
    date: '1681982541000',
    paymentStatus: PAYMENT_STATUS_ENUM.UN_PAID,
    transactionStatus: TRANSACTION_STATUS_ENUM.PENDING,
  },
];
