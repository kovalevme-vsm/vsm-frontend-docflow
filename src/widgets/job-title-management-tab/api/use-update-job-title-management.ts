import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useUpdateJobTitleManagement = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<JobTitleManagerType, AxiosError<DRFErrorResponse>, Omit<JobTitleManagerType, 'id' | 'created_at'>>(
    {
      mutationFn: (variables) => {
        return apiClient.put(QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.detail(id), variables);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list });
        queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.detail(id) });
        notification.success({ message: 'Успешно', description: 'Должность успешно обновлена' });
      },
      onError: (error) => {
        if (error.response) {
          error.response.data.errors.map((error) => message.error(error.detail));
        }
      },
    }
  );
};
