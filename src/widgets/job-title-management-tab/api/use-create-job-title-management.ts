import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { JobTitleManagerType } from 'widgets/job-title-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateJobTitleManagement = () => {
  const queryClient = useQueryClient();
  return useMutation<JobTitleManagerType, AxiosError<DRFErrorResponse>, Omit<JobTitleManagerType, 'id' | 'created_at'>>(
    {
      mutationFn: (variables) => {
        return apiClient.post(QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.index, variables);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list });
        notification.success({ message: 'Успешно', description: 'Должность успешно создана' });
      },
      onError: (error) => {
        if (error.response) {
          error.response.data.errors.map((error) => message.error(error.detail));
        }
      },
    }
  );
};
