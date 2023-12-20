import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Components
import Login from '@app/pages/Login';

// Constants
import { ERROR_MESSAGES, ROUTES } from '@app/constants';

const useNavigateMock = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => useNavigateMock,
}));

const setup = () =>
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );

describe('Login page', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle submit correctly', async () => {
    setup();

    const usernameInput = screen.getByRole<HTMLInputElement>('textbox');

    const passwordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/password/i);

    const checkboxLabel = screen.getByText(/remember me/i);

    const submitBtn = screen.getByRole<HTMLButtonElement>('button', {
      name: /btn\-sign\-in/i,
    });

    await userEvent.type(usernameInput, 'dieu.le@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@123');

    await userEvent.click(checkboxLabel);

    await userEvent.click(submitBtn);

    waitFor(() => {
      expect(useNavigateMock).toHaveBeenCalledWith(ROUTES.ROOT);
    });
  });

  it('should handle submit failed', async () => {
    setup();

    const usernameInput = screen.getByRole<HTMLInputElement>('textbox');

    const passwordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/password/i);

    const checkboxLabel = screen.getByText(/remember me/i);

    const submitBtn = screen.getByRole<HTMLButtonElement>('button', {
      name: /btn\-sign\-in/i,
    });

    await userEvent.type(usernameInput, 'dieu.le@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@12356345');

    await userEvent.click(checkboxLabel);

    await userEvent.click(submitBtn);

    waitFor(() => {
      const message = screen.findByText(
        new RegExp(ERROR_MESSAGES.AUTH_INCORRECT, 'i'),
      );

      expect(message).toEqual(ERROR_MESSAGES.AUTH_INCORRECT);
    });
  });
});
