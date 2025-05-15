import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useUpdateDepartmentManagement = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<
    DepartmentManagerType,
    AxiosError<DRFErrorResponse>,
    Omit<DepartmentManagerType, 'id' | 'created_at'>
  >({
    mutationFn: (variables) => {
      return apiClient.put(QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.detail(id), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list });
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.detail(id) });
      notification.success({ message: 'Успешно', description: 'Отдел успешно обновлен' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
