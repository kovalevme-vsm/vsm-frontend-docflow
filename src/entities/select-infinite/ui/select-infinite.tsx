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

  const { data, isPending, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [apiPath, ...queryKey, searchValue],
    queryFn: ({ pageParam }) => queryFn<ResponseType>(apiPath)({ page: pageParam, search: searchValue }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next,
  });

  const handlePopupScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const { currentTarget } = e;
    const { scrollTop, scrollHeight, clientHeight } = currentTarget;

    // Проверяем, что пользователь прокрутил до конца (с небольшим запасом)
    if (scrollTop + clientHeight >= scrollHeight - 10 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  return (
    <Select
      options={items}
      searchValue={searchValue}
      onSearch={onChangeSearchValue}
      loading={isPending || isFetchingNextPage}
      onPopupScroll={handlePopupScroll}
      {...selectProps}
    />
  );
}
