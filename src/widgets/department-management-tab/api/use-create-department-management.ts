import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { DepartmentManagerType } from 'widgets/department-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateDepartmentManagement = () => {
  const queryClient = useQueryClient();
  return useMutation<
    DepartmentManagerType,
    AxiosError<DRFErrorResponse>,
    Omit<DepartmentManagerType, 'id' | 'created_at'>
  >({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.index, variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Отдел успешно создан' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
