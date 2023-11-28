import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// component
import { Button } from '@components/index';
import { PhoneIcon } from '@chakra-ui/icons';

describe('Button test cases', () => {
  const mockOnClick = jest.fn();
  it('should render correctly', () => {
    const { container } = render(
      <Button
        leftIcon={<PhoneIcon />}
        rightIcon={<PhoneIcon />}
        onClick={mockOnClick}
      >
        Test Button
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('calls onClick when being clicked', async () => {
    const { getByText } = render(
      <Button onClick={mockOnClick}>Test Checkbox</Button>,
    );
    const checkbox = getByText('Test Checkbox');

    await userEvent.click(checkbox);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
