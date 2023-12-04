export interface PaginationType {
  currentPage: number;
  arrOfCurrButtons: (number | string)[];
}

export interface FormatPaginationParams extends PaginationType {
  totalCount: number;
  pageSize: number;
}
