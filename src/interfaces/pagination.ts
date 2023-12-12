export interface PaginationType {
  arrOfCurrButtons: (number | string)[];
}

export interface FormatPaginationParams extends PaginationType {
  currentPage: number;
  totalCount: number;
  pageSize: number;
}
