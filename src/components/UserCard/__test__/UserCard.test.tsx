import { render } from '@testing-library/react';

// Components
import UserCard from '..';

// Mock
import { INITIAL_USER } from '@app/mocks';

describe('UserCard component', () => {
  it('renders correctly', () => {
    const { container } = render(<UserCard user={INITIAL_USER} />);

    expect(container).toMatchSnapshot();
  });
});
