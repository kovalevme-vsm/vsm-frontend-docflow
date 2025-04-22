// src/shared/api/hooks/useDictionary.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

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
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  // const pageSize = searchParams.get('pageSize') || '10';

  const {
    data: itemsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [...queryKey, page],
    queryFn: () => fetchItems({ page: Number(page), pageSize: 10 }),
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
