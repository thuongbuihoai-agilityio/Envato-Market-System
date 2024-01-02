import { render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { ActionCell } from '@app/components';

const onDeleteTransaction = jest.fn();

const setup = () =>
  render(<ActionCell isOpenModal onDeleteTransaction={onDeleteTransaction} />, {
    wrapper: Table,
  });

describe('CustomerNameCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
