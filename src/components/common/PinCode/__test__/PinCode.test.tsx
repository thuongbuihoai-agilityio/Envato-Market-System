import { render, screen } from '@testing-library/react';

// Component
import PinCode from '..';
import userEvent from '@testing-library/user-event';

describe('PinCode test cases', () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  const setup = () =>
    render(
      <PinCode
        isError={false}
        isInvalid={false}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />,
    );

  it('should render correctly', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle change when typing input', async () => {
    setup();

    const pinInputField = screen.getByTestId<HTMLInputElement>('pin-input');

    await userEvent.type(pinInputField, '1');

    expect(mockOnChange).toHaveBeenCalled();
  });
});
