import { DOTS } from '@app/constants/common';
import { ERROR_MESSAGES } from '@app/constants/messages';
import { ROUTES } from '@app/constants/routers';
import { FormatPaginationParams } from '@app/interfaces/pagination';

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

  if (formatNumberButton(numberOfPage).length <= 4) {
    const numberOfPages = Array.from(
      { length: formatNumberButton(numberOfPage).length },
      (_, index) => index + 1,
    );
    tempNumberOfButtons = numberOfPages;
  } else {
    const rangeStart = Math.max(1, currentPage - 1);
    const rangeEnd = Math.min(
      currentPage + 1,
      formatNumberButton(numberOfPage).length,
    );
    tempNumberOfButtons = [
      ...(rangeEnd >= formatNumberButton(numberOfPage).length - 1
        ? [
            ...(formatNumberButton(numberOfPage).length - 3 > 1
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
  }

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

export const validatePassword = (value: string) => {
  if (!value) {
    return ERROR_MESSAGES.FIELD_REQUIRED('Password');
  }

  if (value.length < 8) {
    return ERROR_MESSAGES.PASS_WORD_SHORT;
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  if (!passwordRegex.test(value)) {
    return ERROR_MESSAGES.PASS_WORD_WEAK;
  }

  return true;
};

export const formatUppercaseFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
