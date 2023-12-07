// Types
import { TDataSource } from '@components/index';
import { TTransaction } from '@interfaces/transaction';

// Mocks
import { TRANSACTIONS } from '@mocks/index';
import { formatDate } from '.';
import { formatUppercaseFirstLetter } from './helpers';

/**
 * Convert data show for home page
 * @param transactions
 * @returns
 */
export const getHistoryHomePage = (histories: TTransaction[]): TDataSource[] =>
  histories.map((history) => {
    const {
      id,
      customer: { avatar, name, location, email },
      amount,
      currency,
      date,
      paymentStatus,
      transactionStatus,
    } = history;

    return {
      id,
      name,
      email,
      location,
      date: formatDate(+date),
      paymentStatus: formatUppercaseFirstLetter(paymentStatus),
      transactionStatus: formatUppercaseFirstLetter(transactionStatus),
      image: avatar || TRANSACTIONS[0].customer.avatar,
      spent: `${currency}${amount}`,
    };
  });
