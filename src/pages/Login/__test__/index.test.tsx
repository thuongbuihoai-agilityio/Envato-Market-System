import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import LoginPage from '@app/pages/Login';

const setup = () =>
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
  );

describe('Login page', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
