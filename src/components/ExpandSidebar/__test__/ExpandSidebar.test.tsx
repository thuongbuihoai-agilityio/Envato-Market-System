import { render, renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// components
import { ExpandSidebar } from '@app/components';
import { useMediaQuery } from '@chakra-ui/react';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: true,
      media: '480px',
      addListener: function () {},
      removeListener: function () {},
    };
  };

const mockOnCloseFunction = jest.fn();

const mockOnOpenFunction = jest.fn();

const setup = () =>
  render(
    <MemoryRouter>
      <ExpandSidebar
        isOpen={true}
        onClose={mockOnOpenFunction}
        onOpen={mockOnCloseFunction}
      />
    </MemoryRouter>,
  );

describe('ExpandSidebar test case', () => {
  it('should render correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should invoke close function when clicking close icon', async () => {
    const { container } = setup();

    const closeIcon = container.querySelector('#close-expand');

    if (closeIcon) {
      await userEvent.click(closeIcon);

      expect(mockOnCloseFunction).toHaveBeenCalled();
    }
  });

  it('should be dismissed when clicking outside on mobile and tablet', async () => {
    const { getByTestId, findByRole } = setup();

    renderHook(() => useMediaQuery('max-width: 1732px'));

    const openExpandBtn = await findByRole('img', {
      name: /this is the left arrow image/i,
    });

    await userEvent.click(openExpandBtn);

    const overlay = getByTestId('expand-overlay');

    await userEvent.click(overlay);

    expect(mockOnCloseFunction).toHaveBeenCalled();
  });
});
