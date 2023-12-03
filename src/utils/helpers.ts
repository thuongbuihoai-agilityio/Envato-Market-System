import { DOTS } from "@constants/common";
import { FormatPaginationParams } from "@interfaces/pagination";

export const formatNumberButton = (numberOfPage: number) => {
  const numberOfButtons = [];
  for (var i = 1; i <= numberOfPage; ++i) {
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

  console.log('currentPage', currentPage);
  console.log(
    'slice',
    formatNumberButton(numberOfPage).slice(rangeStart - 1, rangeEnd),
  );
  console.log('rangeStart', rangeStart);
  console.log('rangeEnd', rangeEnd);

  tempNumberOfButtons = [
    ...(currentPage && rangeEnd === formatNumberButton(numberOfPage).length
      ? [
          ...(formatNumberButton(numberOfPage).length - 3 >= 1
            ? [1, DOTS]
            : []),
          ...(formatNumberButton(numberOfPage).length - 1 >= 1
            ? [formatNumberButton(numberOfPage).length - 1]
            : []),
          // formatNumberButton(numberOfPage).length - 1,
          formatNumberButton(numberOfPage).length,
        ]
      : formatNumberButton(numberOfPage).slice(rangeStart - 1, rangeEnd)),
    rangeEnd < formatNumberButton(numberOfPage).length - 1 ? DOTS : null,
    rangeEnd < formatNumberButton(numberOfPage).length
      ? formatNumberButton(numberOfPage).length
      : null,
  ].filter((button) => button !== null);

  return tempNumberOfButtons;
};


// export const formatPagination = ({
//   totalCount,
//   pageSize,
//   currentPage,
//   arrOfCurrButtons,
// }: FormatPaginationParams) => {
//   const numberOfPage = Math.ceil(totalCount / pageSize);
//   let tempNumberOfButtons = [...arrOfCurrButtons];

//   if (formatNumberButton(numberOfPage).length < 6) {
//     tempNumberOfButtons = formatNumberButton(numberOfPage);
//   } else if (currentPage > formatNumberButton(numberOfPage).length - 3) {
//     const sliced = formatNumberButton(numberOfPage).slice(
//       formatNumberButton(numberOfPage).length - 2,
//     );

//     tempNumberOfButtons = [1, DOTS, ...sliced];
//   } else {
//     tempNumberOfButtons = [
//       1,
//       currentPage + 1,
//       DOTS,
//       formatNumberButton(numberOfPage).length,
//     ];
//   }

//   return tempNumberOfButtons;
// };
