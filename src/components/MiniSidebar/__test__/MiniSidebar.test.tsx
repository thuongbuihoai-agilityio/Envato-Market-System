import { render } from '@testing-library/react';

// components
import { MemoryRouter } from 'react-router-dom';
import { MiniSidebar } from '@app/components';

describe('MiniSidebar test case', () => {
  it('should render correctly', () => {
    const mockFucntion = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <MiniSidebar isOpen={true} onClose={mockFucntion} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
