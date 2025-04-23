import {
  Person,
  PersonFormValue,
} from 'pages/dictionary-persons-page/types.ts';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, DRFListPaginationResponse } from 'shared/lib/query';

export const dictionaryApi = {
  // Получение списка с пагинацией
  fetchAll: async (params: { page: number; pageSize: number }) => {
    const response = await apiClient.get<DRFListPaginationResponse<Person>>(
      dictionaryApiPath.persons,
      { params }
    );
    return response.data;
  },

  // Создание записи
  create: async (data: PersonFormValue): Promise<Person> => {
    const response = await apiClient.post(dictionaryApiPath.persons, data);
    return response.data;
  },

  // Обновление записи
  update: async (
    id: string | number,
    data: Partial<PersonFormValue>
  ): Promise<Person> => {
    const response = await apiClient.put(
      dictionaryApiPath.personsDetail(id),
      data
    );
    return response.data;
  },

  // Удаление записи
  delete: async (id: string | number) => {
    await apiClient.delete(dictionaryApiPath.personsDetail(id));
  },
};
