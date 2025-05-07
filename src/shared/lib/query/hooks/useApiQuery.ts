import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export function useApiQuery<R = unknown, E = AxiosError<DRFErrorResponse>>({
  apiPath,
  config,
  ...options
}: {
  apiPath: string;
  config?: AxiosRequestConfig<any> | undefined;
} & Omit<UseQueryOptions<R, E>, 'queryFn'>): UseQueryResult<R, E> {
  return useQuery<R, E>({
    queryFn: async () => {
      const response: AxiosResponse<R> = await apiClient.get(apiPath, config);
      return response.data;
    },
    retry: false,
    throwOnError: false,
    ...options,
  });
}
