import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// component
import Dropdown from '..';

describe('Dropdown render', () => {
  const renderComponent = (
    <MemoryRouter>
      <Dropdown name="John Doe" permission="Super Admin" />
    </MemoryRouter>
  );

  it('Should render match with snapshot.', () => {
    const { container } = render(renderComponent);
    expect(container).toMatchSnapshot();
  });

  it('Get Dropdown component', () => {
    const { getByTestId } = render(renderComponent);

    const avatar = getByTestId('TestDropdown');
    expect(avatar).toBeTruthy();
  });
});
