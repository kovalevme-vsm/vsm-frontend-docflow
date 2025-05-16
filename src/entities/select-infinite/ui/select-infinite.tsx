import { useInfiniteQuery } from '@tanstack/react-query';
import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';
import { ReactElement, useMemo } from 'react';

import { useSearchDebounce } from 'entities/select-infinite/models/hooks.ts';
import { queryFn } from 'entities/select-infinite/models/query.ts';

interface Props extends Omit<SelectProps, 'options' | 'onSearch' | 'searchValue' | 'loading'> {
  apiPath: string;
  queryKey: string[];
}

type ResponseType = {
  value: string;
  label: string;
};

export default function SelectInfinite({ apiPath, queryKey, ...selectProps }: Props): ReactElement {
  const { searchValue, onChangeSearchValue } = useSearchDebounce();

  const { data, isPending, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [apiPath, ...queryKey, searchValue],
    queryFn: ({ pageParam }) => queryFn<ResponseType>(apiPath)({ page: pageParam, search: searchValue }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  return (
    <Select
      options={items}
      searchValue={searchValue}
      onSearch={onChangeSearchValue}
      loading={isPending || isFetchingNextPage}
      {...selectProps}
    />
  );
}
