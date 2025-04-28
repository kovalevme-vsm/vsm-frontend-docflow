import {
  Status,
  StatusFormValue,
} from 'pages/dictionary-statuses-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<DRFListPaginationResponse<Status>>(
      dictionaryApiPath.status,
      { params }
    );
    return response.data;
  },

  // Создание записи
  create: async (data: StatusFormValue): Promise<Status> => {
    const response = await apiClient.post(dictionaryApiPath.status, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<StatusFormValue>
  ): Promise<Status> => {
    const response = await apiClient.put(
      dictionaryApiPath.statusDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.statusDetail(id));
  },
};
