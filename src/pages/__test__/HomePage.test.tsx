import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardPage from '@app/pages/Home/index';
import { useGetStatistic } from '@app/hooks';
import { TOTAL_EARNINGS_MOCK } from '@app/mocks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

// Mock the modules or functions used in your component
jest.mock('@app/hooks', () => ({
  ...jest.requireActual('@app/hooks'),
  useGetStatistic: jest.fn(),
}));

const setup = () =>
  render(
    <QueryClientProvider client={new QueryClient()}>
      <DashboardPage />
    </QueryClientProvider>,
    { wrapper: BrowserRouter },
  );

describe('Dashboard Component', () => {
  beforeEach(() => {
    (useGetStatistic as jest.Mock).mockReturnValue({
      data: TOTAL_EARNINGS_MOCK,
      isLoading: false,
      isError: false,
    });
  });
  it('Should render match with snapshot.', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Should error when fetch data failed', () => {
    (useGetStatistic as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });
    const { findByText } = setup();

    expect(findByText('Total statistic data error')).toBeDefined();
  });
});
