import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

import { IRouteCreate } from 'pages/system-settings/system-settings-route-create/models/types.ts';

import { QUERY, ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateRoute = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<IRouteCreate, AxiosError<DRFErrorResponse>, IRouteCreate>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.index, variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Маршрут успешно создан' });
      navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT, { replace: true });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
