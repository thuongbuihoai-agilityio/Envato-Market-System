import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// HOCs
import { withLogged, withCheckLogin } from '..';

// Constants
import { ROUTES } from '@app/constants';

// Stores
import { authStore, TAuthStoreData } from '@app/stores';

const Home = () => <h2>Home page</h2>;
const Login = () => <h2>Login page</h2>;
const RouterTemp = () => (
  <MemoryRouter initialEntries={[ROUTES.ROOT]}>
    <Routes>
      <Route path={ROUTES.ROOT} Component={withCheckLogin(Home)} />
      <Route path={ROUTES.LOGIN} Component={withLogged(Login)} />
    </Routes>
  </MemoryRouter>
);

const setup = () => render(<RouterTemp />);

describe('withAuth', () => {
  it('Need login', () => {
    authStore.setState({ user: null });
    const { container, getByText } = setup();

    expect(container).toMatchSnapshot();
    expect(getByText('Login page')).toBeDefined();
  });

  it('Logged', () => {
    authStore.setState({
      user: {
        email: 'a@asnet.com.vv',
        id: '1',
        lastName: 'B',
        firstName: 'C',
        createdAt: Date.now(),
      } as TAuthStoreData['user'],
    });
    const { container, getByText } = setup();

    expect(container).toMatchSnapshot();
    expect(getByText('Home page')).toBeDefined();
  });
});
