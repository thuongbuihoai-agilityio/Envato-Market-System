import axios, { AxiosInstance } from 'axios';

// Constants
import { END_POINTS } from '@app/constants';

// Types
import { TEmployee } from '@app/interfaces';

export const employeeHttpRequest: AxiosInstance = axios.create({
  baseURL: process.env.VITE_API_USER,
});

export const getEmployees = async (query = ''): Promise<TEmployee[]> =>
  (await employeeHttpRequest.get(`${END_POINTS.EMPLOYEES}?position=${query}`))
    .data;
