import { DOTS } from '@constants/common';
import { ROUTES } from '@constants/routers';
import { FormatPaginationParams } from '@interfaces/pagination';

export const formatNumberButton = (numberOfPage: number) => {
  const numberOfButtons = [];
  for (let i = 1; i <= numberOfPage; ++i) {
    numberOfButtons.push(i);
  }
  return numberOfButtons;
};

export const formatPagination = ({
  totalCount,
  pageSize,
  currentPage,
  arrOfCurrButtons,
}: FormatPaginationParams) => {
  const numberOfPage = Math.ceil(totalCount / pageSize);
  let tempNumberOfButtons = [...arrOfCurrButtons];

  let rangeStart = Math.max(1, currentPage - 1);

  let rangeEnd = Math.min(
    currentPage + 1,
    formatNumberButton(numberOfPage).length,
  );

  tempNumberOfButtons = [
    ...(rangeEnd >= formatNumberButton(numberOfPage).length - 1
      ? [
          ...(formatNumberButton(numberOfPage).length - 3 >= 1
            ? Array.from(
                { length: 3 },
                (_, i) => formatNumberButton(numberOfPage).length - 4 + i,
              )
            : []),
          formatNumberButton(numberOfPage).length - 1,
          formatNumberButton(numberOfPage).length,
        ]
      : [
          rangeStart,
          rangeStart + 1,
          rangeStart + 2,
          DOTS,
          formatNumberButton(numberOfPage).length,
        ]),
  ].filter((button) => button !== null);

  return tempNumberOfButtons;
};

export const getTitleByPathName = (path: string): string => {
  switch (path) {
    case ROUTES.MY_WALLET:
      return 'My Wallet';
    case ROUTES.TRANSACTION:
      return 'Transaction';
    case ROUTES.USER:
      return 'User';
    case ROUTES.HISTORY:
      return 'History';
    case ROUTES.SETTING:
      return 'Setting';
    default:
      return 'Dashboard';
  }
};
