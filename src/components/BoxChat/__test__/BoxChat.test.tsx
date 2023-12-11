import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import BoxChat from '@app/components/BoxChat';

test('BoxChat component renders correctly', () => {
  const { container } = render(<BoxChat />);
  expect(container).toMatchSnapshot();
});
