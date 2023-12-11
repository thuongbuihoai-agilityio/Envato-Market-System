import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { Menu } from '@app/components';

// Assets
import { DashboardIcon } from '@app/assets/icons';

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
});
