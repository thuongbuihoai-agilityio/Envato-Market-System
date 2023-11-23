import { memo, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
