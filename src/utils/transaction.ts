// Types
import { TDataSource } from '@app/components';
import { TTransaction } from '@app/interfaces/transaction';

// Mocks
import { TRANSACTIONS } from '@app/mocks';

// Utils
import { formatDate, formatUppercaseFirstLetter } from '.';

/**
 * Convert data show for home page
 * @param transactions
 * @returns
 */
export const getTransactionHomePage = (
  transactions: TTransaction[],
): TDataSource[] =>
  transactions.map((transaction) => {
    const {
      id,
      customer: { avatar, name, location, email },
      amount,
      currency,
      date,
      paymentStatus,
      transactionStatus,
    } = transaction;

    return {
      id,
      name: formatUppercaseFirstLetter(name),
      email,
      location,
      date: formatDate(+date),
      paymentStatus: formatUppercaseFirstLetter(paymentStatus),
      transactionStatus: formatUppercaseFirstLetter(transactionStatus),
      image: avatar || TRANSACTIONS[0].customer.avatar,
      spent: `${currency}${amount}`,
    };
  });
