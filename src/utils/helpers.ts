import { DOTS } from "@constants/common";
import { FormatPaginationParams } from "@interfaces/pagination";

export const formatNumberButton = (numberOfPage: number) => {
  const numberOfButtons = [];
  for (var i = 1; i <= numberOfPage; ++i) {
    numberOfButtons.push(i);
  }
  return numberOfButtons;
};

// export const formatPagination = ({
//   totalCount,
//   pageSize,
//   currentPage,
// }: FormatPaginationParams) => {
//   const numberOfPage = Math.ceil(totalCount / pageSize);
//   const pages = formatNumberButton(numberOfPage);

//   const startIndex = Math.max(0, currentPage - 1);
//   const endIndex = Math.min(startIndex + 2, pages.length - 1);

//   const tempNumberOfButtons = pages.slice(startIndex, endIndex + 1);

//   return tempNumberOfButtons;
// };

export const formatPagination = ({
  totalCount,
  pageSize,
  currentPage,
  arrOfCurrButtons,
}: FormatPaginationParams) => {
  const numberOfPage = Math.ceil(totalCount / pageSize);
  let tempNumberOfButtons = [...arrOfCurrButtons];

  // if (formatNumberButton(numberOfPage).length < 6) {
  //   console.log(' be hon 6');

  //   tempNumberOfButtons = formatNumberButton(numberOfPage);
  // } else {
    console.log(' lon hon 66666666');

    let rangeStart = Math.max(1, currentPage - 1);
    console.log('rangeStart', rangeStart);

    let rangeEnd = Math.min(
      currentPage + 1,
      formatNumberButton(numberOfPage).length,
    );
    console.log('rangeEnd', rangeEnd);


    // if (rangeEnd - rangeStart < 1) {
    //   // If there are fewer than 3 pages in the range, adjust the range
    //   const offset = 2 - (rangeEnd - rangeStart);
    //   console.log('offset', offset);

    //   if (rangeStart > 1) {
    //     rangeStart -= offset;
    //   } else {
    //     rangeEnd += offset;
    //   }
    // }

    tempNumberOfButtons = [
      // rangeStart > 1 ? 1 : null,
      // rangeStart > 2 ? DOTS : null,
      ...formatNumberButton(numberOfPage).slice(rangeStart - 1, rangeEnd),
      rangeEnd < formatNumberButton(numberOfPage).length ? DOTS : null,
      rangeEnd < formatNumberButton(numberOfPage).length - 1
        ? formatNumberButton(numberOfPage).length
        : null,
    ].filter((button) => button !== null);
  // }

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
