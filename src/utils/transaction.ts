// Types
import { TTransaction } from '@app/interfaces';

// Utils
import { formatDate, formatDecimalNumber, formatUppercaseFirstLetter } from '.';

/**
 * Convert data show for home page
 * @param transactions
 * @returns
 */
export const getTransactionHomePage = (transactions: TTransaction[] = []) =>
  transactions.map((transaction) => {
    const {
      id,
      customer: { customerId, avatar, customerName, address, email, role },
      amount,
      currency,
      date,
      paymentStatus,
      transactionStatus,
    } = transaction;

    return {
      id,
      name: formatUppercaseFirstLetter(customerName),
      customer: { customerId, avatar, customerName, address, email, role },
      email,
      location: address,
      date: formatDate(+date),
      paymentStatus: formatUppercaseFirstLetter(paymentStatus),
      transactionStatus: formatUppercaseFirstLetter(transactionStatus),
      image: avatar,
      spent: `${currency}${formatDecimalNumber(+amount)}`,
    };
  });
