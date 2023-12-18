import { fireEvent, render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { ActionCell } from '@app/components';

const onClick = jest.fn();

const setup = () =>
  render(<ActionCell onClick={onClick} />, {
    wrapper: Table,
  });

describe('CustomerNameCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Render', () => {
    const { getByRole } = setup();

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });
});
