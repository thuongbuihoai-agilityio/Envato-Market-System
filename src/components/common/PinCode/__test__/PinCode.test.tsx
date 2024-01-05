import { render, renderHook } from '@testing-library/react';

// Component
import PinCode from '..';
import { TPinCodeForm } from '@app/layouts/MainLayout';
import { useForm } from 'react-hook-form';

describe('PinCode test cases', () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();
  const {
    result: {
      current: { control },
    },
  } = renderHook(() => useForm<TPinCodeForm>());
  const setup = () =>
    render(
      <PinCode
        control={control}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />,
    );

  it('should render correctly', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
