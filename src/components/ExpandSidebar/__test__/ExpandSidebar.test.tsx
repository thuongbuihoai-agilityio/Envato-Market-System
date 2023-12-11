import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// components
import { ExpandSidebar } from '@app/components';

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
