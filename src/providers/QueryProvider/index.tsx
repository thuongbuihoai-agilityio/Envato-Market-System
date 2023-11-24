import { DEFAULT_STALE_TIME } from '@constants/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo, ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
    },
  },
});

type TQueryProvider = {
  children: ReactNode;
};

const QueryProvider = ({ children }: TQueryProvider) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default memo(QueryProvider);
