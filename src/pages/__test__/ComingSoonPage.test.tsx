import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import ComingSoon from '@app/pages/ComingSoon';

describe('Dashboard Component', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<ComingSoon />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
