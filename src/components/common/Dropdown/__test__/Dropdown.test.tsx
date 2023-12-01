import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// component
import Dropdown from '..';

describe('Dropdown render', () => {
  it('Should render match with snapshot.', () => {
    const { container } = render(
      <MemoryRouter>
        <Dropdown name="John Doe" permission="Super Admin" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Get Dropdown component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Dropdown name="John Doe" permission="Super Admin" />
      </MemoryRouter>,
    );

    const avatar = getByTestId('TestDropdown');
    expect(avatar).toBeTruthy();
  });
});
