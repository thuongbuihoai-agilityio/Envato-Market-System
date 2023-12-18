import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mocks
import { INITIAL_EFFICIENCY } from '@app/mocks';

// Hooks
import { useGetStatistic } from '@app/hooks';

// Pages
import MyWalletPage from '@app/pages/MyWallet';

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
    const { container } = render(<MyWalletPage />);

    expect(container).toMatchSnapshot();
  });
});
