import { render } from '@testing-library/react';
import * as chakra from '@chakra-ui/react';

// Components
import EfficiencyInfo from '../EfficiencyInfo';

// Mocks
import { EFFICIENCY_MOCK } from '@app/mocks';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div>EfficiencyInfo component</div>,
}));

jest.mock('@chakra-ui/react');

describe('EfficiencyInfo component', () => {
  it('should render correctly', () => {
    jest.spyOn(chakra, 'useColorMode').mockReturnValue({
      colorMode: 'light',
      setColorMode: jest.fn(),
      toggleColorMode: jest.fn(),
    });
    const { container } = render(<EfficiencyInfo {...EFFICIENCY_MOCK} />);

    expect(container).toMatchSnapshot();
  });

  it('should render with dark mode ', () => {
    jest.spyOn(chakra, 'useColorMode').mockReturnValue({
      colorMode: 'dark',
      setColorMode: jest.fn(),
      toggleColorMode: jest.fn(),
    });
    const { container } = render(<EfficiencyInfo {...EFFICIENCY_MOCK} />);

    expect(container).toMatchSnapshot();
  });
});
