import { render } from '@testing-library/react';

// Components
import UserForm from '@pages/Setting/Personal';

test('renders UserForm with content', () => {
  const { container } = render(<UserForm />);

  expect(container).toMatchSnapshot();
});
