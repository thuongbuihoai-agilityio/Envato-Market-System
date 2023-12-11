import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import CardPayment from '@app/components/CartPayment';

test('CardPayment component renders correctly', () => {
  const { container } = render(<CardPayment />);
  expect(container).toMatchSnapshot();
});
