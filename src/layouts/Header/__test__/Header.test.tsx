import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Constants
import { AUTHENTICATION_ROLE } from '@app/constants';

// Stores
import { authStore } from '@app/stores';

// Interfaces
import { TUserDetail } from '@app/interfaces';

// component
import Header from '../';

describe('Header render', () => {
  beforeEach(() => {
    authStore.setState({
      user: {
        role: AUTHENTICATION_ROLE.MEMBER,
      } as TUserDetail,
    });
  });

  const renderComponent = ({ name }: { name?: string }) =>
    render(<Header name={name || 'Dashboard'} />, { wrapper: MemoryRouter });

  it('Should render match with snapshot.', () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });
});
