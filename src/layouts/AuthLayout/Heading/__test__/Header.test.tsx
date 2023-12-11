import { render } from '@testing-library/react';

// Components
import HeadingComponent from '@app/layouts/AuthLayout/Heading';

describe('Header', () => {
  it('should render correctly', () => {
    const { container } = render(<HeadingComponent title="Test Content" />);
    expect(container).toMatchSnapshot();
  });
});
