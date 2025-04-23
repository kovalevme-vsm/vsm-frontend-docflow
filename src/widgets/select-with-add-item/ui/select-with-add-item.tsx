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
import { DefaultOptionType } from 'antd/es/select';
import React, { useRef, useState } from 'react';

interface SelectWithAddItemProps<T = string> extends SelectProps {
  items: DefaultOptionType[] | undefined;
  onAddItem: (newItem: string) => Promise<T>;
  queryKey: string[];
  pagination?: {
    hasMore: boolean;
    isLoadingMore?: boolean;
    onLoadMore: () => void;
  };
}

export function SelectWithAddItem<T>({
  items,
  onAddItem,
  queryKey,
  pagination,
  ...selectProps
}: SelectWithAddItemProps<T>) {
  const [newItemName, setNewItemName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const queryClient = useQueryClient();

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
      pagination?.hasMore &&
      !pagination.isLoadingMore
    ) {
      pagination.onLoadMore();
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
      dropdownRender={dropdownRender}
      options={items}
      onPopupScroll={handlePopupScroll}
      loading={selectProps.loading || pagination?.isLoadingMore}
      {...selectProps}
    />
  );
}
