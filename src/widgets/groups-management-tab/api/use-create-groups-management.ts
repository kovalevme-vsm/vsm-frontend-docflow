import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import { AxiosError } from 'axios';

import { GroupsManagerType } from 'widgets/groups-management-tab/models/types.ts';

import { QUERY } from 'shared/const';
import { apiClient } from 'shared/lib/axios';
import { DRFErrorResponse } from 'shared/lib/query';

export const useCreateGroupsManagement = () => {
  const queryClient = useQueryClient();
  return useMutation<GroupsManagerType, AxiosError<DRFErrorResponse>, Omit<GroupsManagerType, 'id'>>({
    mutationFn: (variables) => {
      return apiClient.post(QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.paths.index, variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY.SYSTEM_SETTINGS_GROUPS_MANAGEMENT.keys.list });
      notification.success({ message: 'Успешно', description: 'Группа успешно создана' });
    },
    onError: (error) => {
      if (error.response) {
        error.response.data.errors.map((error) => message.error(error.detail));
      }
    },
  });
};
