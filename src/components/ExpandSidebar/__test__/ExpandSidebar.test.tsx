import { render, renderHook, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// components
import { ExpandSidebar } from '@app/components';
import { useMediaQuery } from '@chakra-ui/react';

const mockOnCloseFunction = jest.fn();

const mockOnOpenFunction = jest.fn();

const mockMobileMediaQuery = () =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: true,
      media: '480px',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

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
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      ...global.matchMedia,
      writable: true,
    });
  });

  it('should render correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should invoke close function when clicking close icon', async () => {
    mockMobileMediaQuery();

    const { container } = setup();

    const closeIcon = container.querySelector('#close-expand');

    if (closeIcon) {
      await userEvent.click(closeIcon);

      expect(mockOnCloseFunction).toHaveBeenCalled();
    }
  });

  it('should be dismissed when clicking outside on mobile and tablet', async () => {
    mockMobileMediaQuery();

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

  it('should be dismissed when navigating page on mobile', async () => {
    mockMobileMediaQuery();

    const { getByText } = setup();

    renderHook(() => useMediaQuery('max-width: 1732px'));

    const transactionBtn = getByText(/transaction/i);

    await userEvent.click(transactionBtn);

    waitFor(() => {
      expect(mockOnCloseFunction).toHaveBeenCalled();
    });
  });
});
