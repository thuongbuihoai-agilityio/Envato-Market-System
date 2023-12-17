import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Pages
import HistoryPage from '../History';

describe('History Component', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<HistoryPage />);

    expect(container).toMatchSnapshot();
  });
});
