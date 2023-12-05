import { render } from '@testing-library/react';

// Component
import Efficiency from '..';

// Mocks
import { EFFICIENCY_MOCK } from '@mocks/index';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));

describe('Efficiency component', () => {
  it('renders correctly', () => {
    const { container } = render(<Efficiency {...EFFICIENCY_MOCK} />);

    expect(container).toMatchSnapshot();
  });

  it('renders with isExchangeRate is true', () => {
    const { container } = render(
      <Efficiency {...EFFICIENCY_MOCK} isExchangeRate />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with is loading is true', () => {
    const { container } = render(<Efficiency {...EFFICIENCY_MOCK} isLoading />);

    expect(container).toMatchSnapshot();
  });
});
