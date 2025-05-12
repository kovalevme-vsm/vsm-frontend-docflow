import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosResponse } from 'axios';

import { SettingsRouteStep } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useStepUpdate = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<SettingsRouteStep>,
    DRFErrorResponse,
    Omit<SettingsRouteStep, 'id' | 'created_at'>
  >({
    mutationFn: (value) => {
      return apiClient.put(
        QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_STEP_UPDATE(id),
        value
      );
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_STEP_RETRIEVE(id),
      });
      console.log(data.data.route);
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_STEPS_LIST(data.data.route),
      });
      message.success('Шаг успешно обновлен');
    },
  });
};
