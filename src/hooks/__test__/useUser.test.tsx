import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';

// Hooks
import { useUpdateUser } from '@app/hooks';

// Interfaces
import { TUserDetail } from '@app/interfaces';

// Services
import { UsersHttpService } from '@app/services';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const data: TUserDetail = {
  address: 'address',
  city: 'Jakarta',
  country: 'Indonesia',
  createdAt: 0,
  email: 'test@gmail.com',
  firstName: 'Abdur',
  id: '1',
  lastName: 'Rohman',
  password: 'test@123',
  phoneNumber: '123123',
  postalCode: '154353',
};

jest.mock('@app/services');

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useUpdateUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('update user successfully', async () => {
    const { result } = renderHook(() => useUpdateUser(), { wrapper });

    act(() => {
      result.current.mutate(data);
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.isSuccess).toBe(true);
  });

  it('update user failed', async () => {
    const { result } = renderHook(() => useUpdateUser(), { wrapper });
    jest.spyOn(UsersHttpService, 'put').mockRejectedValue(new Error('error'));

    act(() => {
      result.current.mutate(data);
    });

    await waitFor(() => result.current.isError);

    expect(result.current.isError).toBe(true);
  });
});
