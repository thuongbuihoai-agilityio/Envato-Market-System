import axios, { AxiosInstance } from 'axios';

// Constants
import { END_POINTS } from '@constants/index';

// Types
import { TEmployee } from '@interfaces/index';

export const employeeHttpRequest: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_USER,
});

export const getEmployees = async (): Promise<TEmployee[]> =>
  (await employeeHttpRequest.get(END_POINTS.EMPLOYEES)).data;
