import { render } from '@testing-library/react';

// Components
import { SPENDING_STATISTICS_MOCK } from '@app/mocks';

// Mocks
import { TotalList } from '@app/components';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('TotalList component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <TotalList spendingStatistics={SPENDING_STATISTICS_MOCK} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with is loading is true', () => {
    const { container } = render(
      <TotalList spendingStatistics={SPENDING_STATISTICS_MOCK} isLoading />,
    );

    expect(container).toMatchSnapshot();
  });
});
