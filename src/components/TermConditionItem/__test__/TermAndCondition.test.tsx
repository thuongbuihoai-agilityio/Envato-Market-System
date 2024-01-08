import { render } from '@testing-library/react';

// Components
import { TermAndConditionItem } from '@app/components';

describe('Term and Conditions', () => {
  it('should render correctly', () => {
    const { container } = render(
      <TermAndConditionItem heading="heading" content="content" />,
    );
    expect(container).toMatchSnapshot();
  });
});
