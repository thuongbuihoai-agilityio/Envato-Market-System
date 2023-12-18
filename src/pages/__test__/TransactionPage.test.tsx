import { render } from '@testing-library/react';

// Pages
import Transaction from '@app/pages/Transaction';

describe('Transaction page', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<Transaction />);

    expect(container).toMatchSnapshot();
  });
});
