import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosResponse } from 'axios';

import { SettingsRoute } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useRouteUpdate = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<SettingsRoute>,
    DRFErrorResponse,
    Omit<SettingsRoute, 'id' | 'created_at'>
  >({
    mutationFn: (value) => {
      return apiClient.put(QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_UPDATE(id), value);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_RETRIEVE(id),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      });
      message.success('Шаг успешно обновлен');
    },
  });
};
