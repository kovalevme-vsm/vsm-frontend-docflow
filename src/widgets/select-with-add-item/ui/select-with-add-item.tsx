import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Button,
  Divider,
  Form,
  InputRef,
  message,
  Select,
  SelectProps,
} from 'antd';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useApiInfiniteSelectQuery } from 'shared/lib/query';

interface SelectWithAddItemProps<T = string> extends SelectProps {
  onAddItem?: (newItem: never) => Promise<T>;
  queryKey: string[];
  path: string;
  formItems?: ReactNode;
}

export function SelectWithAddItem<T>({
  onAddItem,
  queryKey,
  path,
  formItems,
  ...selectProps
}: SelectWithAddItemProps<T>) {
  const inputRef = useRef<InputRef>(null);
  const [searchValue, setSearchValue] = useState<string>('');
  const [value] = useDebounce(searchValue, 500);
  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [form] = Form.useForm();

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
      form.resetFields();
      inputRef.current?.focus();
      message.success('Успешно добавлено');
    },
  });

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
      {formItems && (
        <>
          <Divider style={{ margin: '8px 0' }} />
          <Form
            form={form}
            className={'flex flex-col'}
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-expect-error
            onFinish={(values) => addItemMutation.mutate(values)}
          >
            {formItems}
            <Form.Item>
              <Button
                block
                htmlType="submit"
                type="default"
                loading={addItemMutation.isPending}
              >
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
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
