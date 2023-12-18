import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

// Pages
import UserPage from '@app/pages/User';

// Mocks
import { USER_MOCK } from '@app/mocks';

const queryClient = new QueryClient();

describe('User Page', () => {
  test('renders User component snapshot', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <UserPage />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should return the correct user based on userId', () => {
    const userIdToFind = '2';

    const result =
      USER_MOCK.find((user) => user.id === userIdToFind) || USER_MOCK[0];

    expect(result).toEqual(USER_MOCK[1]);
  });
});
