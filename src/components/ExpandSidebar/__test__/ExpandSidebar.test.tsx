import { render } from '@testing-library/react';

// components
import { MemoryRouter } from 'react-router-dom';
import { ExpandSidebar } from '@components/index';

describe('ExpandSidebar test case', () => {
  it('should render correctly', () => {
    const mockFucntion = jest.fn();

    const { container } = render(
      <MemoryRouter>
        <ExpandSidebar
          isOpen={true}
          onClose={mockFucntion}
          onOpen={mockFucntion}
        />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
