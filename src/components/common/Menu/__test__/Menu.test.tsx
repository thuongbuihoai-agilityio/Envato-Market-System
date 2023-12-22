import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { Menu } from '@app/components';

// Assets
import { DashboardIcon } from '@app/components/Icons';
import userEvent from '@testing-library/user-event';

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
      destination: '/Mock',
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

  it('handle click menu item', async () => {
    render(
      <MemoryRouter>
        <Menu listItem={MOCK_ITEM_LIST} />
      </MemoryRouter>,
    );

    const singOut = screen.getByText('Sign Out');

    await userEvent.click(singOut);

    expect(useNavigateMock).toHaveBeenCalledWith('/Mock');
  });
});
