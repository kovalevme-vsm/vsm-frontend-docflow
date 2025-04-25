import {
  AppendixType,
  AppendixTypeFormValue,
} from 'pages/dictionary-appendix-type-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<
      DRFListPaginationResponse<AppendixType>
    >(dictionaryApiPath.appendixType, { params });
    return response.data;
  },

  // Создание записи
  create: async (data: AppendixTypeFormValue): Promise<AppendixType> => {
    const response = await apiClient.post(dictionaryApiPath.appendixType, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<AppendixTypeFormValue>
  ): Promise<AppendixType> => {
    const response = await apiClient.put(
      dictionaryApiPath.appendixTypeDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.appendixTypeDetail(id));
  },
};
