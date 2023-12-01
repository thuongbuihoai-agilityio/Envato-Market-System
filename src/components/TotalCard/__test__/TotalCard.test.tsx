import { render } from '@testing-library/react';
import TotalCard from '..';
import { TOTAL_EARNINGS_MOCK } from '@mocks/index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('TotalCard component', () => {
  it('renders correctly', () => {
    const { container } = render(<TotalCard {...TOTAL_EARNINGS_MOCK} />);

    expect(container).toMatchSnapshot();
  });
});
