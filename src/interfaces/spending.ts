export interface ISpendingStatistics {
  title: string;
  total: number;
  growth: number;
  weeklyIncome: number[];
}

export interface IRevenueFlow {
  month: string;
  pending: number;
  signed: number;
  lost: number;
}
