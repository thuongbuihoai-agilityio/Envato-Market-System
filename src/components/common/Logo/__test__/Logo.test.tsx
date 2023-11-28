import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// component
import { Logo } from '@components/index';

test('renders Logo with content', () => {
  const { container } = render(
    <MemoryRouter>
      <Logo />,
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
