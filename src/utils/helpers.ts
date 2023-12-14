// Constants
import { REGEX, DOTS, ERROR_MESSAGES } from '@app/constants';

// Types
import { FormatPaginationParams } from '@app/interfaces/pagination';

export const formatNumberButton = (numberOfPage: number): number[] =>
  Array.from({ length: numberOfPage }).map(
    (_, index: number): number => index + 1,
  );

export const formatPagination = ({
  totalCount,
  pageSize,
  currentPage,
  arrOfCurrButtons,
}: FormatPaginationParams): (string | number)[] => {
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

export const validatePassword = (value: string) => {
  if (!value) {
    return ERROR_MESSAGES.FIELD_REQUIRED('Password');
  }

  if (!REGEX.LENGTH_IS_EIGHT.test(value)) {
    return ERROR_MESSAGES.PASS_WORD_SHORT;
  }

  if (!REGEX.PASSWORD.test(value)) {
    return ERROR_MESSAGES.PASS_WORD_WEAK;
  }

  return true;
};

export const formatUppercaseFirstLetter = (value = ''): string =>
  value.charAt(0).toUpperCase() + value.slice(1);
