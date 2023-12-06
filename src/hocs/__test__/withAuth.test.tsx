import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// HOCs
import { withLogged, withNeedLogin } from '..';

// Hooks
import { useAuth } from '@hooks/index';

const Home = () => <h2>Home page</h2>;
const Login = () => <h2>Login page</h2>;
const RouterTemp = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path="/" Component={withNeedLogin(Home)} />
      <Route path="/login" Component={withLogged(Login)} />
    </Routes>
  </MemoryRouter>
);

const setup = () => render(<RouterTemp />);

describe('withAuth', () => {
  it('Need login', () => {
    useAuth.setState({ user: null });
    const { container, getByText } = setup();

    expect(container).toMatchSnapshot();
    expect(getByText('Login page')).toBeDefined();
  });

  it('Logged', () => {
    useAuth.setState({
      user: {
        email: 'a@asnet.com.vv',
        id: '1',
        lastName: 'B',
        firstName: 'C',
        createdAt: Date.now(),
      },
    });
    const { container, getByText } = setup();

    expect(container).toMatchSnapshot();
    expect(getByText('Home page')).toBeDefined();
  });
});
