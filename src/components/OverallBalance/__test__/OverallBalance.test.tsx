import { render } from '@testing-library/react';

// Components
import OverallBalance from '..';

// Mock
import { OVERALL_BALANCE_MOCK } from '@app/mocks';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('OverallBalance component', () => {
  it('renders correctly', () => {
    const { container } = render(<OverallBalance {...OVERALL_BALANCE_MOCK} />);

    expect(container).toMatchSnapshot();
  });
});
