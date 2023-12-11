import { render } from '@testing-library/react';

// Components
import Divider from '@app/components/common/Divider';

test('renders DividerCustom with content', () => {
  const { container } = render(<Divider content="Test Content" />);

  expect(container).toMatchSnapshot();
});
