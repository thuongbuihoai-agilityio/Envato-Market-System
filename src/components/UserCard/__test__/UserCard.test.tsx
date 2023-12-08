import { render } from '@testing-library/react';

// Components
import UserCard from '..';

// Mock
import { USER_MOCK } from '@mocks/index';

describe('UserCard component', () => {
  it('renders correctly', () => {
    const { container } = render(<UserCard user={USER_MOCK} />);

    expect(container).toMatchSnapshot();
  });
});
