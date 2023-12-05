import { render } from '@testing-library/react';

// Components
import OverallBalance from '..';

// Mock
import { OVERALL_BALANCE_MOCK } from '@mocks/index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('OverallBalance component', () => {
  it('renders correctly', () => {
    const { container } = render(<OverallBalance {...OVERALL_BALANCE_MOCK} />);

    expect(container).toMatchSnapshot();
  });

  it('renders with is loading is true', () => {
    const { container } = render(
      <OverallBalance {...OVERALL_BALANCE_MOCK} isLoading />,
    );

    expect(container).toMatchSnapshot();
  });
});
