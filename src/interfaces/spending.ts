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

export interface IEfficiency {
  arrival: number;
  spending: number;
  statistical: {
    title: string;
    value: number;
  }[];
  isLoading?: boolean;
  isExchangeRate?: boolean;
}

export interface IOverallBalance {
  total: number;
  growth: number;
  data: Omit<IRevenueFlow, 'pending'>[];
}
