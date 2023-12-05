import { render } from '@testing-library/react';

// components
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from '@components/index';

describe('Sidebar test case', () => {
  it('should render correctly', () => {
    const mockFucntion = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <Sidebar isOpen={true} onClose={mockFucntion} onOpen={mockFucntion} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
