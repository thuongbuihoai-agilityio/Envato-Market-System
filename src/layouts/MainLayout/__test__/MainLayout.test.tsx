import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { MainLayout } from '@app/layouts';

describe('MainLayout Component', () => {
  it('Should render match with snapshot.', async () => {
    const { container } = render(<MainLayout />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
