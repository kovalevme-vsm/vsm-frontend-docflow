import {
  OrganizationCreateFormValue,
  OrganizationType,
} from 'pages/dictionary-organization-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<
      DRFListPaginationResponse<OrganizationType>
    >(dictionaryApiPath.organization, { params });
    return response.data;
  },

  // Создание записи
  create: async (
    data: OrganizationCreateFormValue
  ): Promise<OrganizationType> => {
    const response = await apiClient.post(dictionaryApiPath.organization, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<OrganizationCreateFormValue>
  ): Promise<OrganizationType> => {
    const response = await apiClient.put(
      dictionaryApiPath.organizationDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.organizationDetail(id));
  },
};
