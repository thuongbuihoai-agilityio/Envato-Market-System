import { TRANSACTIONS } from '@app/mocks';
import { getTransactionHomePage } from '../transaction';
import { formatDate } from '../time';
import { formatDecimalNumber, formatUppercaseFirstLetter } from '..';

describe('getTransactionHomePage', () => {
  it('transforms transactions correctly', () => {
    const result = getTransactionHomePage([TRANSACTIONS[0]]);

    expect(result).toEqual([
      {
        id: '1701513537051',
        name: 'Devon Lane',
        customer: {
          customerId: null,
          customerName: 'Devon Lane',
          avatar:
            'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-shoes-t9dFBx.png',
          email: 'devon@mail.com',
          address: 'Philadelphia, USA',
        },
        email: 'devon@mail.com',
        location: 'Philadelphia, USA',
        date: formatDate(+TRANSACTIONS[0].date),
        image: TRANSACTIONS[0].customer.avatar,
        paymentStatus: formatUppercaseFirstLetter(
          TRANSACTIONS[0].paymentStatus,
        ),
        transactionStatus: formatUppercaseFirstLetter(
          TRANSACTIONS[0].transactionStatus,
        ),
        spent: `${TRANSACTIONS[0].currency}${formatDecimalNumber(
          +TRANSACTIONS[0].amount,
        )}`,
      },
    ]);
  });

  it('transforms transactions with empty data', () => {
    const result = getTransactionHomePage();

    expect(result).toEqual([]);
  });
});
