import {
  Department,
  DepartmentFormValue,
} from 'pages/dictionary-departments-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<DRFListPaginationResponse<Department>>(
      dictionaryApiPath.department,
      { params }
    );
    return response.data;
  },

  // Создание записи
  create: async (data: DepartmentFormValue): Promise<Department> => {
    const response = await apiClient.post(dictionaryApiPath.department, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<DepartmentFormValue>
  ): Promise<Department> => {
    const response = await apiClient.put(
      dictionaryApiPath.departmentDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.departmentDetail(id));
  },
};
