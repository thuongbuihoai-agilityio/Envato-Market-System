import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import { Navigation } from '@app/components';

describe('Navigation test case', () => {
  it('should render correctly with the default destination', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation>Mock navigation</Navigation>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with the given destination', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation destination="/mock">Mock navigation</Navigation>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
