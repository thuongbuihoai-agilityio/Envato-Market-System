import { StatisticalHttpService } from '.';

export const getStatistical = async <T>(endPoint: string): Promise<T> => {
  const response = await StatisticalHttpService.get<T>(endPoint);

  return response.data;
};
