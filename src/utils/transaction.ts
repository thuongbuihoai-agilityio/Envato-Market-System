import dayjs from 'dayjs';

// Types
import { TTransaction } from '@app/interfaces';

// Utils
import { formatDecimalNumber, formatUppercaseFirstLetter } from '.';
import { IMAGES } from '@app/constants';

/**
 * Convert data show for home page
 * @param transactions
 * @returns
 */
export const getTransactionHomePage = (transactions: TTransaction[] = []) =>
  transactions.map((transaction) => {
    const {
      _id,
      customer: {
        customerId,
        avatar,
        firstName,
        lastName,
        address: { state, street, city, zip },
        email,
        role,
      },
      amount,
      currency,
      createdAt,
      paymentStatus,
      transactionStatus,
    } = transaction;

    return {
      _id,
      name: formatUppercaseFirstLetter(`${firstName} ${lastName}`),
      customer: {
        customerId,
        avatar,
        firstName,
        lastName,
        address: { state, street, city, zip },
        email,
        role,
      },
      email,
      location: `${street} ${city}`,
      date: dayjs(createdAt).format('MMM DD, YYYY'),
      paymentStatus: formatUppercaseFirstLetter(paymentStatus),
      transactionStatus: formatUppercaseFirstLetter(transactionStatus),
      image: IMAGES.BIG_AVATAR.url || avatar,
      spent: `${currency}${formatDecimalNumber(+amount)}`,
    };
  });
