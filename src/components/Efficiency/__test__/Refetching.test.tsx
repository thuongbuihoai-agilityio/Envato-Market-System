import { render } from '@testing-library/react';

// Components
import EfficiencyRefetch from '../Refetching';

describe('Refetching component test cases', () => {
  it('should render correctly', () => {
    const { container } = render(<EfficiencyRefetch />);

    expect(container).toMatchSnapshot();
  });
});
