import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.tsx';

// TODO: Configure QueryClient with appropriate default options
// Reference: https://tanstack.com/query/latest/docs/framework/react/reference/QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: Configure default query options
      // Examples: refetchOnWindowFocus, retry, staleTime, etc.
      // RETRY 1X, STALE TIME: 5 MINS, DISABLE AUTO REFETCH
      retry: 1,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* React Query Devtools - useful for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
