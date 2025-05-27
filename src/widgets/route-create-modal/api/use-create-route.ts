import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router';

import { RouteCreateFormValues } from 'widgets/route-create-modal/models/type.ts';

import { QUERY, ROUTES } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateRoute = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation<AxiosResponse<RouteCreateFormValues>, AxiosError<DRFErrorResponse>, RouteCreateFormValues>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.paths.index, variables);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_ROUTE_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Шаблон маршрута успешно создан' });
      navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT_DETAIL(data.data.id));
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
