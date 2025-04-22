import {
  JobTitle,
  JobTitleFormValue,
} from 'pages/dictionary-job-title-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<DRFListPaginationResponse<JobTitle>>(
      dictionaryApiPath.jobTitle,
      { params }
    );
    return response.data;
  },

  // Создание записи
  create: async (data: JobTitleFormValue): Promise<JobTitle> => {
    const response = await apiClient.post(dictionaryApiPath.jobTitle, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<JobTitleFormValue>
  ): Promise<JobTitle> => {
    const response = await apiClient.put(
      dictionaryApiPath.jobTitleDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.jobTitleDetail(id));
  },
};
