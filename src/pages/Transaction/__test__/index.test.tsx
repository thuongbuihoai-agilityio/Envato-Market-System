import { render } from '@testing-library/react';

// Pages
import Transaction from '..';

describe('Transaction page', () => {
  it('Match to snapshot', () => {
    const { container } = render(<Transaction />);

    expect(container).toMatchSnapshot();
  });
});
