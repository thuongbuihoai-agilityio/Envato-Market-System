import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

  it('should show/hide password when clicking the eyes icon', async () => {
    setup();

    const togglePasswordBtn = screen.getByRole('button', {
      name: /toggle\-password/i,
    });

    const passwordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/password/i);

    expect(passwordInput.type).toBe('password');

    await userEvent.click(togglePasswordBtn);

    waitFor(() => {
      expect(passwordInput.type).toBe('text');
    });
  });
});
