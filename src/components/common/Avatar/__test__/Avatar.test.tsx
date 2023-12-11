import { cleanup, render } from '@testing-library/react';

// Components
import { Avatar } from '@app/components';

describe('Avatar render', () => {
  afterEach(cleanup);

  test('Should render match with snapshot.', () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });

  it('Get avatar component', () => {
    const { getByTestId } = render(<Avatar data-testid="TestAvatar" />);

    const avatar = getByTestId('TestAvatar');
    expect(avatar).toBeTruthy();
  });
});
