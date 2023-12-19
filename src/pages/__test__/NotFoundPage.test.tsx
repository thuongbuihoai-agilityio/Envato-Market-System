import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from '@app/pages/NotFound';

describe('NotFound Page', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<NotFoundPage />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
