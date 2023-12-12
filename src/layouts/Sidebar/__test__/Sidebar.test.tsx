import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { SideBar } from '@app/layouts';

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
