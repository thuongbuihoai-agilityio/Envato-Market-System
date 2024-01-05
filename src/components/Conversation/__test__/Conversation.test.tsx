import { Conversation } from '@app/components';
import { render } from '@testing-library/react';

describe('Conversation Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Conversation />);
    expect(container).toMatchSnapshot();
  });
});
