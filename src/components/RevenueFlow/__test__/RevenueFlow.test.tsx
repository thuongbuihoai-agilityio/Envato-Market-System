import { render } from '@testing-library/react';

// Components
import RevenueFlow from '..';

// Mock
import { REVENUE_FLOW_MOCK } from '@app/mocks';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('RevenueFlow component', () => {
  it('renders correctly', () => {
    const { container } = render(<RevenueFlow data={REVENUE_FLOW_MOCK} />);

    expect(container).toMatchSnapshot();
  });
});
