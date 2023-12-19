import { render } from '@testing-library/react';

// Mocks
import { TOTAL_EARNINGS_MOCK } from '@app/mocks';

// Components
import { TotalCard } from '@app/components';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('TotalCard component', () => {
  it('renders correctly', () => {
    const { container } = render(<TotalCard {...TOTAL_EARNINGS_MOCK} />);

    expect(container).toMatchSnapshot();
  });

  it('Get TotalBalance component', () => {
    const { getByText } = render(
      <TotalCard
        title="Total earnings"
        total={10}
        growth={20}
        weeklyIncome={TOTAL_EARNINGS_MOCK.weeklyIncome}
      />,
    );

    const totalBalance = getByText('Total earnings');
    expect(totalBalance).toBeTruthy();
  });
});
