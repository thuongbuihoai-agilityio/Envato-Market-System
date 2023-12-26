import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import { Avatar } from '@app/components';

jest.mock('@chakra-ui/react', () => ({
  Avatar: jest.fn((props) => <div data-testid="avatar" {...props} />),
}));

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

  it('renders the image with correct src prop', () => {
    const src = 'https://example.com/avatar.png';
    render(<Avatar src={src} />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toHaveAttribute('src', src);
  });
});
