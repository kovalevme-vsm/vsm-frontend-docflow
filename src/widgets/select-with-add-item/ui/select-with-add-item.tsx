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
}

export function SelectWithAddItem<T>({
  items,
  onAddItem,
  queryKey,
  ...selectProps
}: SelectWithAddItemProps<T>) {
  const [newItemName, setNewItemName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const queryClient = useQueryClient();

  const addItemMutation = useMutation({
    mutationFn: onAddItem,
    onSuccess: (newItem) => {
      queryClient.setQueryData(queryKey, (oldItems: T[] = []) => [
        ...oldItems,
        newItem,
      ]);
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
          type="text"
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
    <Select dropdownRender={dropdownRender} options={items} {...selectProps} />
  );
}
