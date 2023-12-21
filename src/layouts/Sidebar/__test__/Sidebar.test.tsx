import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { SideBar } from '@app/layouts';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('Sidebar test case', () => {
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
