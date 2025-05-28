import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';

import { RouteStepData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateRouteStep = () => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<RouteStepData>, AxiosError<DRFErrorResponse>, RouteStepData>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_ROUTE_STEP_MANAGEMENT.paths.index, variables);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_STEP_MANAGEMENT.keys.list });
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.detail(data.data.route) });
      notification.success({ message: 'Успешно', description: 'Этап маршрута успешно добавлен' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
