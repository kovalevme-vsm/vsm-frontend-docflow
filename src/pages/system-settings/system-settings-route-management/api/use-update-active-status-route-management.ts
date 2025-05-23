import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { Route } from 'pages/system-settings/system-settings-route-management/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useUpdateActiveStatusRouteManagement = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<Route, AxiosError<DRFErrorResponse>, { is_active: boolean }>({
    mutationFn: (variables) => {
      return apiClient.patch(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.detail(id), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.detail(id) });
      notification.success({ message: 'Успешно', description: 'Статус маршрута изменен' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
