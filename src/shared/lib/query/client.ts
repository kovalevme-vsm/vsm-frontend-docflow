import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: false,
      gcTime: 15 * 60 * 1000,
      notifyOnChangeProps: 'all',
    },
    mutations: {
      retry: 1,
      networkMode: 'always',
    },
  },
});
