import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// component
import { Dropdown } from '@app/components';
import { AUTHENTICATION_ROLE } from '@app/constants';
import { authStore } from '@app/stores';
import { TUserDetail } from '@app/interfaces';

const renderComponent = ({
  name,
  permission,
}: {
  name?: string;
  permission?: string;
}) =>
  render(<Dropdown name={name} permission={permission} />, {
    wrapper: MemoryRouter,
  });

describe('Dropdown render', () => {
  beforeEach(() => {
    authStore.setState({
      user: {
        role: AUTHENTICATION_ROLE.MEMBER
      } as TUserDetail
    })
  })

  it('Should render match with snapshot.', async () => {
    const { container } = await renderComponent({
      name: 'John Doe',
      permission: 'Super Admin',
    });

    waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('Get Dropdown component', () => {
    const { getByTestId } = renderComponent({});

    const avatar = getByTestId('TestDropdown');

    expect(avatar).toBeTruthy();
  });
});
