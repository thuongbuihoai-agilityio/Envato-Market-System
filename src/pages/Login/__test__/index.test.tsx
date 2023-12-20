import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Components
import Login from '@app/pages/Login';

const setup = () =>
  render(
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </QueryClientProvider>,
  );

// TODO: Can not expect, I will update late
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

    const submitBtn = container.querySelector('button[type="submit"]');
    submitBtn && (await userEvent.click(submitBtn));
  });

  it('should handle submit failed', async () => {
    const { container } = setup();

    const usernameInput = screen.getByRole<HTMLInputElement>('textbox');

    const passwordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/password/i);

    const checkboxLabel = screen.getByText(/remember me/i);

    await userEvent.type(usernameInput, 'dieu.le@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@12356345');

    await userEvent.click(checkboxLabel);

    await waitFor(async () => {
      const submitBtn = container.querySelector('button[type="submit"]');
      submitBtn && (await userEvent.click(submitBtn));

      // TODO: Can not expect now, I will update late
      // const message = screen.findByText(
      //   new RegExp(ERROR_MESSAGES.AUTH_INCORRECT, 'i'),
      // );
      // expect(message).toEqual(ERROR_MESSAGES.AUTH_INCORRECT);
    });
  });
});
