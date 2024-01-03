import { render } from '@testing-library/react';

// components
import { MemoryRouter } from 'react-router-dom';
import { MiniSidebar } from '@app/components';
import { AUTHENTICATION_ROLE, MENU_ITEM_LIST } from '@app/constants';
import { TMenuItem } from '@app/components/common/Menu';

describe('MiniSidebar test case', () => {
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
    const mockFucntion = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <MiniSidebar
          menuItem={MENU_ITEM_LIST(AUTHENTICATION_ROLE.MEMBER) as TMenuItem[]}
          isOpen={true}
          onClose={mockFucntion}
          role="member"
        />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
