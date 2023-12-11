import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Constants
import { IMAGES } from '@app/constants/images';

// Message
import Message from '@app/components/BoxChat/Message';

describe('Message component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Message
        content="This is message"
        avatar={IMAGES.CHAT_USER_AVATAR.url}
        isImage
        avatarPosition="before"
        isOwnerMessage
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render image container when isImage is true', () => {
    const { getByTestId } = render(
      <Message content="Hello" avatar="avatar.png" isImage={true} />,
    );

    const imageContainer = getByTestId('image-container');
    expect(imageContainer).toBeInTheDocument();
  });

  it('should render text content when isImage is false', () => {
    const { getByTestId } = render(
      <Message content="Hello" avatar="avatar.png" isImage={false} />,
    );

    const textContent = getByTestId('text-content');
    expect(textContent).toBeInTheDocument();
  });

  it('should render avatar after the content when avatarPosition is "after"', () => {
    const { getByTestId } = render(
      <Message
        content="Hello"
        avatar="avatar.png"
        isImage={false}
        avatarPosition="after"
      />,
    );

    const avatar = getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('margin-left: 2px;');
  });
});
