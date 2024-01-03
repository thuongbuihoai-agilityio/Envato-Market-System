// Constants
import { PAYMENT_STATUS_ENUM, TRANSACTION_STATUS_ENUM } from '@app/constants';

// Types
import { TCustomer } from '.';

export type TTransaction = {
  id: string;
  customer: TCustomer;
  amount: string;
  currency: string;
  date: string;
  name: string;
  location: string;
  image: string;
  paymentStatus: PAYMENT_STATUS_ENUM;
  transactionStatus: TRANSACTION_STATUS_ENUM;
};

export interface IDataList {
  dataTransaction: TTransaction[];
  dataHistory: TTransaction[];
}
