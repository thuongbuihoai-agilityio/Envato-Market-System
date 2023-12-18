import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { INITIAL_EFFICIENCY } from '@app/mocks';
import { useGetStatistic } from '@app/hooks';
import MyWalletPage from '../MyWallet';

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
