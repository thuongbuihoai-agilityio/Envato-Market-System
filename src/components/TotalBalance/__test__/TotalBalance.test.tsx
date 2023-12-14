import { cleanup, render } from '@testing-library/react';

// Components
import { TotalBalance } from '@app/components';

describe('TotalBalance render', () => {
  afterEach(cleanup);

  test('Should render match with snapshot.', () => {
    const { container } = render(<TotalBalance />);
    expect(container).toMatchSnapshot();
  });

  test('Get TotalBalance component', () => {
    const { getByText } = render(<TotalBalance />);

    const totalBalance = getByText('Total Balance');
    expect(totalBalance).toBeTruthy();
  });
});
