import { render } from '@testing-library/react';
import Efficiency from '..';
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

  it('renders with is loading is true', () => {
    const { container } = render(<Efficiency {...EFFICIENCY_MOCK} isLoading />);

    expect(container).toMatchSnapshot();
  });
});
