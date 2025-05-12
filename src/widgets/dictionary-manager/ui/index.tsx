import { Button, Space } from 'antd';
import { ColumnType } from 'antd/es/table';
import { ReactElement, ReactNode, useState } from 'react';
import { IconType } from 'react-icons';
import { TbChevronLeft, TbPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useDictionaryItemList } from 'widgets/dictionary-manager/api/use-dictionary-items-list.ts';
import { DrawerDictionaryManager } from 'widgets/dictionary-manager/ui/drawer-dictionary-manager.tsx';
import { PageHeader } from 'widgets/page-header';

import { IconButton, Search, Table } from 'shared/ui';

interface DictionaryManagerProps<T> {
  title: string;
  icon: IconType;
  code: string;
  columns: ColumnType<T>[];
  formFields: () => ReactNode;
}

export function DictionaryManager<T extends { id: string }>({
  title,
  icon,
  code,
  columns,
  formFields,
}: DictionaryManagerProps<T>): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useDictionaryItemList<T>(code);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const actionColumn: ColumnType = {
    title: '',
    key: 'actions',
    align: 'right',
    render: (_, record: T) => (
      <Space size="middle">
        <Button
          size={'small'}
          type="link"
          onClick={() => {
            setId(record.id);
            setIsModalOpen(true);
          }}
        >
          Редактировать
        </Button>
      </Space>
    ),
  };

  const allColumns = [...columns, actionColumn];

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={icon} title={title} />
      </div>
      <div className={'flex justify-end gap-4'}>
        <Button icon={<TbPlus />} type={'primary'} onClick={handleCreate}>
          Создать
        </Button>
        <Search />
      </div>
      <Table
        total={data?.count}
        columns={allColumns}
        dataSource={data?.results}
        loading={isPending}
      />
      <DrawerDictionaryManager<T>
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formFields={formFields}
        code={code}
        id={id}
      />
    </div>
  );
}
