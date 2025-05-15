import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactElement } from 'react';
import { TbPlus } from 'react-icons/tb';

import { useListDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-list-dictionary-management.ts';

import { Search, Table } from 'shared/ui';

interface Props<T> {
  dictionaryKey: string;
  columns: ColumnsType<T>;
}

export function DictionaryManagementBaseTab<T>(props: Props<T>): ReactElement {
  const { data: dictionaryManagementList, isPending: isPendingDictionary } = useListDictionaryManagement<T>(
    props.dictionaryKey
  );
  return (
    <div className={'space-y-4'}>
      <div className={'flex flex-col gap-2 lg:flex-row'}>
        <Search />
        <Button icon={<TbPlus />} type={'primary'}>
          Создать элемент
        </Button>
      </div>
      <Table<T>
        columns={props.columns}
        loading={isPendingDictionary}
        dataSource={dictionaryManagementList?.results}
        total={dictionaryManagementList?.count}
      />
    </div>
  );
}
