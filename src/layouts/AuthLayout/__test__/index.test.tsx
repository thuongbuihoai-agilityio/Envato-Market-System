import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Layouts
import { AuthLayout } from '@app/layouts';

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
