import {
  ConfidentialityLevel,
  ConfidentialityLevelFormValue,
} from 'pages/confidentiality-level-page/types';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<
      DRFListPaginationResponse<ConfidentialityLevel>
    >(dictionaryApiPath.confidentialityLevel, { params });
    return response.data;
  },

  // Создание записи
  create: async (
    data: ConfidentialityLevelFormValue
  ): Promise<ConfidentialityLevel> => {
    const response = await apiClient.post(
      dictionaryApiPath.confidentialityLevel,
      data
    );
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<ConfidentialityLevelFormValue>
  ): Promise<ConfidentialityLevel> => {
    const response = await apiClient.put(
      dictionaryApiPath.confidentialityLevelDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.confidentialityLevelDetail(id));
  },
};
