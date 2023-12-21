import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mocks
import { INITIAL_EFFICIENCY } from '@app/mocks';

// Hooks
import { useGetStatistic } from '@app/hooks';

// Pages
import MyWalletPage from '@app/pages/MyWallet';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the modules or functions used in your component
jest.mock('@app/hooks', () => ({
  ...jest.requireActual('@app/hooks'),
  useGetStatistic: jest.fn(),
}));

const setup = () =>
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MyWalletPage />
    </QueryClientProvider>,
    { wrapper: BrowserRouter },
  );

describe('Dashboard Component', () => {
  beforeEach(() => {
    (useGetStatistic as jest.Mock).mockReturnValue({
      data: INITIAL_EFFICIENCY,
      isLoading: false,
      isError: false,
    });
  });

  it('Should render match with snapshot.', async () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Should render match with snapshot when data undefined.', async () => {
    (useGetStatistic as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });
    const { getByText } = setup();

    expect(getByText('Efficiency data error')).toBeDefined();
  });
});
