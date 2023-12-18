import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';

// Hooks
import { useEmployee } from '@app/hooks';

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
  it('Should get employees data', async () => {
    jest
      .spyOn(employeeHttpRequest, 'get')
      .mockResolvedValue({ data: USERS_MOCK });

    const { result } = await act(() => setup());

    await waitFor(() =>
      expect(result.current.data?.length).toBe(USERS_MOCK.length),
    );
  });

  it('Should get employees data (reject)', async () => {
    jest
      .spyOn(employeeHttpRequest, 'get')
      .mockRejectedValue({ data: undefined });

    const { result } = await act(() => setup());

    await waitFor(() => expect(result.current.isError).toBeFalsy());
  });
});
