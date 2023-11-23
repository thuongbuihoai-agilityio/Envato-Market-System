import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo, ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    // TBD
  },
});

type TQueryProvider = {
  children: ReactNode;
};

const QueryProvider = ({ children }: TQueryProvider) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default memo(QueryProvider);
