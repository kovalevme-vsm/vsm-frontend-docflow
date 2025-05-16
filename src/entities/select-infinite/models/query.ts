import { AxiosResponse } from 'axios';

import { apiClient } from 'shared/lib/axios';
import { DRFListPaginationResponse } from 'shared/lib/query';

export const queryFn = <T>(apiPath: string) => {
  return async ({ page, search }: { page: number; search: string }) => {
    const response: AxiosResponse<DRFListPaginationResponse<T>> = await apiClient.get(apiPath, {
      params: { page, search, for_select: true },
    });
    return response.data;
  };
};
