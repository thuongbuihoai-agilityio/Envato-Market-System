import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import { TransactionTable } from '@app/components';

// Services
import * as services from '@app/services';

// Mocks
import { TRANSACTIONS } from '@app/mocks';

// Constants
import { DEBOUNCE_TIME } from '@app/constants';

const setup = (isTableHistory = false) =>
  render(
    <TransactionTable
      {...(isTableHistory && { isTableHistory: isTableHistory })}
    />,
    {
      wrapper: ({ children }: { children: ReactNode }) => (
        <BrowserRouter>
          <QueryClientProvider client={new QueryClient()}>
            {children}
          </QueryClientProvider>
        </BrowserRouter>
      ),
    },
  );

jest.mock('@app/services');

jest.useFakeTimers();
describe('Transaction table', () => {
  beforeEach(() => {
    jest.spyOn(services, 'getTransactions').mockResolvedValue(TRANSACTIONS);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Match snapshot (isTableHistory = false)', async () => {
    const { container } = await act(setup);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('tr').length).toBe(
        TRANSACTIONS.length + 1,
      );
    });
  });

  it('Match snapshot (isTableHistory = true)', async () => {
    const { container } = await act(() => setup(true));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('tr').length).toBe(
        TRANSACTIONS.length + 1,
      );
    });
  });

  it('Match snapshot (isTableHistory = true)', async () => {
    const { container } = await act(() => setup(true));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('tr').length).toBe(
        TRANSACTIONS.length + 1,
      );
    });
  });

  it('Render with empty data', async () => {
    jest.spyOn(services, 'getTransactions').mockResolvedValue([]);
    const { container } = await act(() => setup(true));

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('tr').length).toBe(2);
    });
  });

  it('Search transactions', async () => {
    const { container } = await act(setup);

    const input = container.querySelector('input');

    await act(() => {
      input &&
        fireEvent.change(input, {
          target: {
            value: 'duong',
          },
        });
      jest.advanceTimersByTime(DEBOUNCE_TIME);
    });

    await waitFor(() => {
      expect(container).toMatchSnapshot();
      expect(container.querySelectorAll('tr').length).toBe(2);
    });
  });

  // TODO: Can not inspect now, I will update later
  it('Sort transactions by name', async () => {
    const { container } = await act(setup);
    await waitFor(() => {});

    const trElements = container.querySelectorAll('tr');
    const sortByNameButton = trElements[0]
      ?.querySelector('th')
      ?.querySelector('button');

    await act(() => {
      sortByNameButton && fireEvent.click(sortByNameButton);
    });
  });
});
