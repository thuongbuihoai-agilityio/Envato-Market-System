import { render } from '@testing-library/react';

// Pages
import TermCondition from '@app/pages/Setting/TermAndCondition';

describe('Term and Condition Component', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<TermCondition />);

    expect(container).toMatchSnapshot();
  });
});
