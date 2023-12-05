import { render } from '@testing-library/react';
import { CustomerNameCell } from '../Body';
import { Table } from '@chakra-ui/react';

const setup = () =>
  render(<CustomerNameCell id={1} name="Duong Pham" />, {
    wrapper: Table,
  });

describe('CustomerNameCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Render', () => {
    const { getByText } = setup();

    expect(getByText('Duong Pham')).toBeDefined();
  });
});
