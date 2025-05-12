import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosResponse } from 'axios';

import { SettingsRouteStep } from 'pages/settings-routes-management/models/types.ts';

import { QUERY_KEYS, QUERY_PATH } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useStepCreate = () => {
  const queryClient = useQueryClient();
  return useMutation<
    AxiosResponse<SettingsRouteStep>,
    DRFErrorResponse,
    Omit<SettingsRouteStep, 'id' | 'created_at'>
  >({
    mutationFn: (value) => {
      return apiClient.post(
        QUERY_PATH.ROUTE_MANAGEMENT_ROUTE_STEP_CREATE,
        value
      );
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTE_STEPS_LIST(data.data.route),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ROUTE_MANAGEMENT_ROUTES_LIST(),
      });
      message.success('Шаг успешно добавлен');
    },
  });
};
