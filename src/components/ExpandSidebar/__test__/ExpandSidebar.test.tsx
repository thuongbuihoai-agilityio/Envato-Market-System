import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// components
import { ExpandSidebar } from '@app/components';

describe('ExpandSidebar test case', () => {
  const mockOnCloseFunction = jest.fn();

  const mockOnOpenFunction = jest.fn();

  const { container } = render(
    <MemoryRouter>
      <ExpandSidebar
        isOpen={true}
        onClose={mockOnOpenFunction}
        onOpen={mockOnCloseFunction}
      />
    </MemoryRouter>,
  );

  it('should render correctly', () => {
    expect(container).toMatchSnapshot();
  });

  it('should invoke close function when clicking close icon', async () => {
    const closeIcon = container.querySelector('#close-expand');

    if (closeIcon) {
      await userEvent.click(closeIcon);

      expect(mockOnCloseFunction).toHaveBeenCalled();
    }
  });
});
