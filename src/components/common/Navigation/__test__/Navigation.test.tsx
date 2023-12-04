import { render } from '@testing-library/react';
import { Navigation } from '@components/index';
import { MemoryRouter } from 'react-router-dom';

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
