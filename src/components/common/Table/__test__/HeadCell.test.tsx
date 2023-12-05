import { render } from '@testing-library/react';
import HeadCell from '../HeadCell';
import { Table } from '@chakra-ui/react';

const setup = () =>
  render(<HeadCell title="Title" />, {
    wrapper: Table,
  });

describe('HeadCell', () => {
  it('Match to snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('Render', () => {
    const { getByText } = setup();

    expect(getByText('Title')).toBeDefined();
  });
});
