import { render } from '@testing-library/react';

// Components
import { ChatMember } from '@app/components';

describe('ChatMember test cases', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ChatMember status={'online'} statusColor={'online'} />,
    );
    expect(container).toMatchSnapshot();
  });
});
