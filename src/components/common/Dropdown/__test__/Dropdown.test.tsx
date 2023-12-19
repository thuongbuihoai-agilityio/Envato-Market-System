import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// component
import { Dropdown } from '@app/components';

describe('Dropdown render', () => {
  const renderComponent = ({
    name,
    permission,
  }: {
    name?: string;
    permission?: string;
  }) =>
    render(
      <Dropdown
        name={name || 'John Doe'}
        permission={permission || 'Super Admin'}
      />,
      { wrapper: MemoryRouter },
    );

  it('Should render match with snapshot.', () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });

  it('Get Dropdown component', () => {
    const { getByTestId } = renderComponent({});

    const avatar = getByTestId('TestDropdown');
    expect(avatar).toBeTruthy();
  });

  it('Re-render', () => {
    const { getByTestId, rerender } = renderComponent({});

    const avatar = getByTestId('TestDropdown');
    expect(avatar).toBeTruthy();

    rerender(<Dropdown name="ABC" permission="BCD" />);
  });
});
