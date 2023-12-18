import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardPage from '@app/pages/Home/index';
import { INITIAL_EFFICIENCY } from '@app/mocks';
import { useGetStatistic } from '@app/hooks';

// Mock the modules or functions used in your component
jest.mock('@app/hooks', () => ({
  useGetStatistic: jest.fn(),
}));

describe('Dashboard Component', () => {
  (useGetStatistic as jest.Mock).mockReturnValue({
    data: INITIAL_EFFICIENCY,
    isLoading: false,
    isError: false,
  });

  it('Should render match with snapshot.', async () => {
    const { container } = render(<DashboardPage />);

    expect(container).toMatchSnapshot();
  });
});
