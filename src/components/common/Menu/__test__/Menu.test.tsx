import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { Menu } from '@app/components';

// Assets
import { DashboardIcon } from '@app/components/Icons';
import userEvent from '@testing-library/user-event';
import { ROUTES } from '@app/constants';

const useNavigateMock = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => useNavigateMock,
}));

describe('Menu test case', () => {
  const MOCK_ITEM_LIST = [
    {
      id: 1,
      leftIcon: DashboardIcon,
      menuItemContent: 'Dashboards',
      destination: '/',
    },
    {
      id: 2,
      menuItemContent: 'Mock',
      destination: '/mock',
    },
    {
      id: 3,
      menuItemContent: 'Sign Out',
      destination: 'sign-out',
    },
  ];

  it('should render correctly and expand by default', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu title="Mock" listItem={MOCK_ITEM_LIST} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with the given minify option', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu title="Mock" isMinify listItem={MOCK_ITEM_LIST} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with the default empty Heading', () => {
    render(
      <MemoryRouter>
        <Menu listItem={MOCK_ITEM_LIST} />
      </MemoryRouter>,
    );

    const expectedHeading = screen.getByRole('heading', { level: 4 });

    expect(expectedHeading.textContent).toMatch('');
  });

  it('handle sign out', async () => {
    render(
      <MemoryRouter>
        <Menu listItem={MOCK_ITEM_LIST} />
      </MemoryRouter>,
    );

    const singOut = screen.getByText('Sign Out');

    await userEvent.click(singOut);

    waitFor(() => {
      expect(useNavigateMock).toHaveBeenCalledWith(ROUTES.LOGIN);
    });
  });
});
