import { render } from '@testing-library/react';

// Layouts
import { AuthLayout } from '@layouts/index';
import { BrowserRouter } from 'react-router-dom';

const setup = () =>
  render(
    <BrowserRouter>
      <AuthLayout />
    </BrowserRouter>,
  );

describe('Auth layout', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
