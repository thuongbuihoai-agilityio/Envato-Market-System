import { render } from '@testing-library/react';

// Components
import Setting from '@app/pages/Setting';

test('renders Setting Page with content', () => {
  const { container } = render(<Setting />);

  expect(container).toMatchSnapshot();
});
