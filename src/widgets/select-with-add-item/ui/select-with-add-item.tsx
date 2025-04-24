import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Button,
  Divider,
  Input,
  InputRef,
  message,
  Select,
  SelectProps,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useApiInfiniteSelectQuery } from 'shared/lib/query';

interface SelectWithAddItemProps<T = string> extends SelectProps {
  onAddItem?: (newItem: string) => Promise<T>;
  queryKey: string[];
  path: string;
}

export function SelectWithAddItem<T>({
  onAddItem,
  queryKey,
  path,
  ...selectProps
}: SelectWithAddItemProps<T>) {
  const [newItemName, setNewItemName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [value] = useDebounce(searchValue, 500);
  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const queryClient = useQueryClient();

  const {
    data: items,
    refetch,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useApiInfiniteSelectQuery({
    path: path,
    queryKey: queryKey,
    search: value,
  });

  useEffect(() => {
    refetch();
  }, [value]);

  useEffect(() => {
    if (items && items.pages) {
      const allItems = items.pages.flatMap((page) => page?.results || []) || [];
      setSelectOptions(allItems);
    }
  }, [items]);

  const addItemMutation = useMutation({
    mutationFn: onAddItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      setNewItemName('');
      inputRef.current?.focus();
      message.success('Успешно добавлено');
    },
  });

  const handleAddItem = () => {
    if (newItemName.trim()) {
      addItemMutation.mutate(newItemName.trim());
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value);
  };

  const handlePopupScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const { currentTarget } = e;
    const { scrollTop, scrollHeight, clientHeight } = currentTarget;

    // Проверяем, что пользователь прокрутил до конца (с небольшим запасом)
    if (
      scrollTop + clientHeight >= scrollHeight - 10 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  const dropdownRender = (menu: React.ReactNode) => (
    <>
      {menu}
      <Divider style={{ margin: '8px 0' }} />
      <div className={'flex gap-2'}>
        <Input
          placeholder="Наименование"
          ref={inputRef}
          className={'w-full flex-1'}
          value={newItemName}
          onChange={handleNameChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddItem();
            }
            e.stopPropagation();
          }}
          disabled={addItemMutation.isPending}
        />
        <Button
          type="default"
          onClick={handleAddItem}
          loading={addItemMutation.isPending}
          disabled={!newItemName.trim()}
        >
          Добавить
        </Button>
      </div>
    </>
  );

  return (
    <Select
      dropdownRender={onAddItem && dropdownRender}
      options={selectOptions}
      onPopupScroll={handlePopupScroll}
      loading={isPending || isFetchingNextPage || isRefetching}
      searchValue={searchValue}
      onSearch={(search) => setSearchValue(search)}
      {...selectProps}
    />
  );
}
