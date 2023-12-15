import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

// Mock the router context
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  RouterProvider: jest.fn(),
}));

describe('App component', () => {
  it('should renders correctly', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
