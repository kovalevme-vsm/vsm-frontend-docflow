import { ReactElement, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { apiClient } from 'shared/lib/axios';
import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiInfiniteSelectQuery,
} from 'shared/lib/query';

export function OrganizationSelect(): ReactElement {
  const [searchValue, setSearchValue] = useState<string>('');
  const [value] = useDebounce(searchValue, 500);
  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const addOrganization = async (name: string) => {
    const response = await apiClient.post(dictionaryApiPath.organization, {
      name,
      inn_number: 'Не указано',
      kpp_number: 'Не указано',
      is_active: true,
    });
    return response.data;
  };

  const {
    data: items,
    refetch,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useApiInfiniteSelectQuery({
    path: dictionaryApiPath.organization,
    queryKey: dictionaryQueryKey.organizationSelect(),
    search: value,
  });

  useEffect(() => {
    if (value) {
      refetch();
    }
  }, [value]);

  useEffect(() => {
    if (items && items.pages) {
      const allItems = items.pages.flatMap((page) => page?.results || []) || [];
      setSelectOptions(allItems);
    }
  }, [items]);

  return (
    <SelectWithAddItem
      placeholder={'Выберите организацию'}
      allowClear
      showSearch
      onSearch={(value) => console.log(value)}
      items={selectOptions}
      loading={isPending || isFetchingNextPage}
      onAddItem={addOrganization}
      queryKey={dictionaryQueryKey.organizationSelect()}
      pagination={{
        hasMore: hasNextPage,
        isLoadingMore: isFetchingNextPage,
        onLoadMore: fetchNextPage,
      }}
    />
  );
}
