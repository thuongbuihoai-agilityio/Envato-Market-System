import { cleanup, render } from '@testing-library/react';

// Components
import { Avatar } from '@components/index';

describe('Avatar render', () => {
  afterEach(cleanup);

  it('should render avatar component', () => {
    const { getByTestId } = render(<Avatar data-testid="TestAvatar" />);

    const avatar = getByTestId('TestAvatar');
    expect(avatar).toBeTruthy();
  });
});
