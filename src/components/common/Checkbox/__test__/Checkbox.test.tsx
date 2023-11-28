import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '@components/index';

// component

describe('Checkbox test cases', () => {
  const mockOnChange = jest.fn();

  it('should render correctly', () => {
    const { container } = render(
      <Checkbox onChange={mockOnChange}>Test Checkbox</Checkbox>,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onChange when being clicked', async () => {
    const { getByText } = render(
      <Checkbox onChange={mockOnChange}>Test Checkbox</Checkbox>,
    );
    const checkbox = getByText('Test Checkbox');

    await userEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
