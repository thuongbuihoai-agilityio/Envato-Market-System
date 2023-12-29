import { fireEvent, render } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

// Components
import { ActionCell } from '@app/components';

const onClickAction = jest.fn();
const onDeleteTransaction = jest.fn();

const setup = () =>
  render(
    <ActionCell
      isOpenModal
      onClickAction={onClickAction}
      onDeleteTransaction={onDeleteTransaction}
    />,
    {
      wrapper: Table,
    },
  );

describe('CustomerNameCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Render', () => {
    const { getByRole } = setup();

    fireEvent.click(getByRole('button'));

    expect(onClickAction).toHaveBeenCalled();
  });
});
