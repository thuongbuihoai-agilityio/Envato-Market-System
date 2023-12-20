import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Components
import Register from '@app/pages/Register';

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
      <Register />
    </BrowserRouter>,
  );

describe('Register page', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle submit correctly', async () => {
    setup();

    const firstNameInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /first\-name/i,
    });

    const lastNameInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /last\-name/i,
    });

    const emailInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /email/i,
    });

    const passwordInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /password/i,
    });

    const confirmPasswordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/confirm password/i);

    const policyCheckbox = screen.getByText(
      /by creating an account, you're agreeing to our , and/i,
    );

    const submitBtn = screen.getByRole('button', {
      name: /btn\-sign\-up/i,
    });

    await userEvent.type(firstNameInput, 'Mock');

    await userEvent.type(lastNameInput, 'User');

    await userEvent.type(emailInput, 'mockuser@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@123');

    await userEvent.clear(confirmPasswordInput);

    await userEvent.type(confirmPasswordInput, 'Abcd@123');

    await userEvent.click(policyCheckbox);

    await userEvent.click(submitBtn);

    waitFor(
      () => {
        expect(useNavigateMock).toHaveBeenCalledWith(ROUTES.ROOT);
      },
      {
        timeout: 5000,
      },
    );
  });

  it('should handle submit failed', async () => {
    setup();

    const firstNameInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /first\-name/i,
    });

    const lastNameInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /last\-name/i,
    });

    const emailInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /email/i,
    });

    const passwordInput = screen.getByRole<HTMLInputElement>('textbox', {
      name: /password/i,
    });

    const confirmPasswordInput =
      screen.getByPlaceholderText<HTMLInputElement>(/confirm password/i);

    const policyCheckbox = screen.getByText(
      /by creating an account, you're agreeing to our , and/i,
    );

    const submitBtn = screen.getByRole('button', {
      name: /btn\-sign\-up/i,
    });

    await userEvent.type(firstNameInput, 'Mock');

    await userEvent.type(lastNameInput, 'User');

    await userEvent.type(emailInput, 'dieu.le@asnet.com.vn');

    await userEvent.type(passwordInput, 'Abcd@123');

    await userEvent.type(confirmPasswordInput, 'Abcd@123');

    await userEvent.click(policyCheckbox);

    await userEvent.click(submitBtn);

    waitFor(() => {
      const message = screen.getByText(
        new RegExp(ERROR_MESSAGES.ACCOUNT_ALREADY_EXISTS, 'i'),
      );

      expect(message).toEqual(ERROR_MESSAGES.ACCOUNT_ALREADY_EXISTS);
    });
  });
});
