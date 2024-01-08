import { render } from '@testing-library/react';

// Pages
import ChatMemberList from '@app/pages/Inbox';

jest.mock('@chakra-ui/react', () => {
  const actual = jest.requireActual('@chakra-ui/react');
  return {
    ...actual,
    useBreakpointValue: jest.fn(),
  };
});

describe('Chat Component', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<ChatMemberList />);

    expect(container).toMatchSnapshot();
  });
});
