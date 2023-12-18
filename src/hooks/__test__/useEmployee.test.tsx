import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';

// Hooks
import { useEmployee } from '..';

// Services
import { employeeHttpRequest } from '@app/services';

// Mocks
import { USERS_MOCK } from '@app/mocks';

const client = new QueryClient();

const setup = () =>
  renderHook(useEmployee, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
  });

describe('useEmployee', () => {
  it('Work', async () => {
    jest
      .spyOn(employeeHttpRequest, 'get')
      .mockResolvedValue({ data: USERS_MOCK });

    const { result } = await act(() => setup());

    await waitFor(() =>
      expect(result.current.data?.length).toBe(USERS_MOCK.length),
    );
  });
});
