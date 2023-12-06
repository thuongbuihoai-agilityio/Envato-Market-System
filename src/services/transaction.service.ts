import axios, { AxiosInstance } from 'axios';

// Constants
import { END_POINTS } from '@constants/api';

// Types
import { TTransaction } from '@interfaces/index';

const transactionHttpService: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_TRANSACTION,
});

export const getTransactions = async (): Promise<TTransaction[]> =>
  (await transactionHttpService.get(END_POINTS.TRANSACTIONS)).data;
