// Types
import { TDataSource } from '@components/index';
import { TTransaction } from '@interfaces/transaction';

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
    } = transaction;

    return {
      id,
      name,
      email,
      location,
      image: avatar,
      spent: `${currency}${amount}`,
    };
  });
