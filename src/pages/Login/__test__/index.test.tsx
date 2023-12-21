import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Components
import Login from '@app/pages/Login';

// Constants
import { ERROR_MESSAGES, ROUTES } from '@app/constants';

const setup = () =>
  render(
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </QueryClientProvider>,
  );

describe('Login page', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle submit correctly', async () => {
    const { container } = setup();

    await act(async () => {
      const usernameInput = screen.getByRole<HTMLInputElement>('textbox');

      const passwordInput =
        screen.getByPlaceholderText<HTMLInputElement>(/password/i);

      const checkboxLabel = screen.getByText(/remember me/i);

      await userEvent.type(usernameInput, 'dieu.le@asnet.com.vn');

      await userEvent.type(passwordInput, 'Abcd@123');

      await userEvent.click(checkboxLabel);
    });

    const currentUrl = global.window.location.pathname;

    expect(currentUrl).toContain(ROUTES.LOGIN);

    const submitBtn = container.querySelector('button[type="submit"]');
    submitBtn && (await userEvent.click(submitBtn));

    expect(currentUrl).toContain(ROUTES.ROOT);
  });

  it('should handle submit failed', async () => {
    setup();

    const usernameInput = screen.getByRole<HTMLInputElement>('textbox');

    const passwordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/password/i);

    const checkboxLabel = screen.getByText(/remember me/i);

    const submitBtn = screen.getByRole('button', {
      name: /sign in/i,
    });

    await userEvent.type(usernameInput, 'dieu.le@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@12356345');

    await userEvent.click(checkboxLabel);

    await userEvent.click(submitBtn);

    waitFor(async () => {
      const message = screen.findByText(
        new RegExp(ERROR_MESSAGES.AUTH_INCORRECT, 'i'),
      );
      expect(message).toEqual(ERROR_MESSAGES.AUTH_INCORRECT);
    });
  });
});
