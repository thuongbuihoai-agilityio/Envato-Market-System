import { render } from '@testing-library/react';

// Components
import Statistical from '../Statistical';
import { STROKE_COLORS } from '@app/constants';

describe('EfficiencyInfo component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Statistical color={STROKE_COLORS[0]} title="Spending" value={1234} />,
    );

    expect(container).toMatchSnapshot();
  });
});
