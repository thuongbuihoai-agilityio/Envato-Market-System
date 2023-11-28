import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Footer from '@layouts/AuthLayout/Footer';

jest.mock('@utils/time', () => ({
  getCurrentYear: jest.fn(() => 2023),
}));

test('renders Footer with links and current year', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
