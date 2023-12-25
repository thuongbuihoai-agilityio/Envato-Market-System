import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { SideBar } from '@app/layouts';

describe('Sidebar test case', () => {
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
      ...window.matchMedia,
      writable: true,
    });
  });

  it('should render correctly', () => {
    const mockFunction = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <SideBar isOpen={true} onClose={mockFunction} onOpen={mockFunction} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
