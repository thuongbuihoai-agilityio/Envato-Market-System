export interface FormatPaginationParams {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  arrOfCurrButtons: (number | string)[];
}
