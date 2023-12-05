import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardPayment from '@components/CartPayment';

test('CardPayment component renders correctly', () => {
  const { container } = render(<CardPayment />);
  expect(container).toMatchSnapshot();
});
