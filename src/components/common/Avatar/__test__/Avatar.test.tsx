import { cleanup, render } from '@testing-library/react';

// Components
import { Avatar } from '@components/index';

describe('Avatar render', () => {
  afterEach(cleanup);

  test('renders Benefit with content', () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });

  it('should render avatar component', () => {
    const { getByTestId } = render(<Avatar data-testid="TestAvatar" />);

    const avatar = getByTestId('TestAvatar');
    expect(avatar).toBeTruthy();
  });
});
