export interface ISpendingStatistics {
  title: string;
  total: number;
  growth: number;
  weeklyIncome: number[];
}

export interface IRevenueFlow {
  title: string;
  pending: number;
  signed: number;
  lost: number;
}
