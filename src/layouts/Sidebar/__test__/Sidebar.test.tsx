import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { SideBar } from '@app/layouts';
import { authStore } from '@app/stores';
import { AUTHENTICATION_ROLE } from '@app/constants';
import { TUserDetail } from '@app/interfaces';

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
    authStore.setState({
      user: {
        role: AUTHENTICATION_ROLE.MEMBER,
      } as TUserDetail,
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
        <SideBar
          isOpen={true}
          onClose={mockFunction}
          onOpen={mockFunction}
          role="member"
        />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
