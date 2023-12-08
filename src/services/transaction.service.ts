import axios, { AxiosInstance } from 'axios';

// Constants
import { END_POINTS } from '@constants/index';

// Types
import { TTransaction } from '@interfaces/index';

const transactionHttpService: AxiosInstance = axios.create({
  baseURL: process.env.VITE_API_TRANSACTION,
});

export const getTransactions = async (
  searchParam?: string,
): Promise<TTransaction[]> =>
  (
    await transactionHttpService.get(
      `${END_POINTS.TRANSACTIONS}${searchParam || ''}`,
    )
  ).data;
