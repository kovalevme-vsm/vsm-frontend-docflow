// src/shared/api/hooks/useDictionary.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { DRFListPaginationResponse } from 'shared/lib/query';

interface DictionaryApi<T> {
  fetchItems: (params: {
    page: number;
    pageSize: number;
  }) => Promise<DRFListPaginationResponse<T>>;
  createItem: (data: Omit<T, 'id'>) => Promise<T>;
  updateItem: (id: string | number, data: Partial<T>) => Promise<T>;
  deleteItem: (id: string | number) => Promise<void>;
}

export function useDictionary<T extends { id: string | number }>({
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
  queryKey,
}: DictionaryApi<T> & { queryKey: string[] }) {
  const queryClient = useQueryClient();

  // Запрос списка элементов

  const {
    data: itemsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [...queryKey, 'list'],
    queryFn: ({ pageParam = 1 }) =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      fetchItems({ page: pageParam, pageSize: 10 }),
  });

  // Мутация для создания
  const createMutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  // Мутация для обновления
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: Partial<T> }) =>
      updateItem(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  // Мутация для удаления
  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return {
    items: itemsData?.results || [],
    total: itemsData?.count || 0,
    isLoading,
    error,
    createItem: createMutation.mutateAsync,
    updateItem: updateMutation.mutateAsync,
    deleteItem: deleteMutation.mutateAsync,
  };
}
