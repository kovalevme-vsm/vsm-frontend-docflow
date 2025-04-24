import {
  Button,
  Checkbox,
  Drawer,
  Form,
  message,
  Popconfirm,
  Space,
  Table,
  Tag,
} from 'antd';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { createElement, ReactElement, ReactNode, useState } from 'react';
import { IconType } from 'react-icons';
import { TbChevronLeft, TbPencil, TbPlus, TbTrash } from 'react-icons/tb';
import { useNavigate, useSearchParams } from 'react-router';

import { useDictionary } from 'widgets/dictionary-page/api/use-dictionary.ts';
import { PageHeader } from 'widgets/page-header';

import { DRFListPaginationResponse } from 'shared/lib/query';
import { IconButton } from 'shared/ui';

interface DictionaryPageProps<T> {
  title: string;
  icon: IconType;
  columns: (ColumnGroupType<T> | ColumnType<T>)[];
  formFields: ReactNode;
  modalCreateTitle: string;
  modalEditTitle: string;
  api: {
    fetchItems: (params: {
      page: number;
      pageSize: number;
    }) => Promise<DRFListPaginationResponse<T>>;
    createItem: (data: Omit<T, 'id'>) => Promise<T>;
    updateItem: (id: string | number, data: Partial<T>) => Promise<T>;
    deleteItem: (id: string | number) => Promise<void>;
  };
  queryKey: string[];
}

export function DictionaryPage<T extends { id: string | number }>({
  title,
  icon,
  columns,
  formFields,
  modalCreateTitle,
  modalEditTitle,
  api,
  queryKey,
}: DictionaryPageProps<T>): ReactElement {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { items, total, isLoading, createItem, updateItem, deleteItem } =
    useDictionary<T>({
      ...api,
      queryKey,
    });

  const handleCreate = () => {
    form.resetFields();
    setEditingId(null);
    setModalOpen(true);
  };

  const handleEdit = (record: T) => {
    form.setFieldsValue(record);
    setEditingId(record.id);
    setModalOpen(true);
  };
  const handleDelete = async (id: string | number) => {
    try {
      await deleteItem(id);
      message.success('Успешно удалено!');
    } catch (error) {
      message.error('Ошибка при удалении');
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingId) {
        await updateItem({ id: editingId, data: values });
        message.success('Успешно обновлено!');
      } else {
        await createItem(values);
        message.success('Успешно создано!');
      }

      setModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error('Ошибка при сохранении');
    }
  };

  const baseColumn: (ColumnGroupType<T> | ColumnType<T>)[] = [
    {
      title: 'Создано',
      dataIndex: 'created_at',
      render: (value) => dayjs(value).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Статус',
      dataIndex: 'is_active',
      align: 'center',
      render: (value: boolean) => (
        <Tag color={value ? 'success' : 'error'}>
          {value ? 'Активна' : 'Неактивна'}
        </Tag>
      ),
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'center',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      render: (_: never, record: T) => (
        <Space size="middle">
          <Button icon={<TbPencil />} onClick={() => handleEdit(record)} />
          <Popconfirm
            title="Удалить запись?"
            onConfirm={() => handleDelete(record.id)}
            okText="Да"
            cancelText="Нет"
          >
            <Button icon={<TbTrash />} danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={icon} title={title} />
      </div>
      <div className={'flex justify-end'}>
        <Button icon={<TbPlus />} type={'primary'} onClick={handleCreate}>
          Создать
        </Button>
      </div>
      <Table
        columns={[...columns, ...baseColumn]}
        dataSource={items}
        pagination={{
          total: total,
          size: 'default',
          showTotal: (total) => (
            <>
              Всего: <b>{total}</b> элементов
            </>
          ),
          current: Number(searchParams.get('page')) | 1,
          onChange: (page) => {
            setSearchParams({ page: String(page) }, { replace: true });
          },
        }}
        rowKey="id"
        size={'small'}
        loading={isLoading}
        scroll={{ x: 'max-content' }}
      />
      <Drawer
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        footer={null}
        classNames={{ wrapper: '!w-full md:!w-2/3 lg:!w-1/3' }}
      >
        <div className={'my-6 flex flex-col items-center justify-center gap-2'}>
          <div className={'w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50'}>
            {createElement(icon, { className: 'text-5xl text-blue-500' })}
          </div>
          <h1 className={'text-center text-xl font-medium'}>
            {editingId ? modalEditTitle : modalCreateTitle}
          </h1>
        </div>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {formFields}
          <Form.Item
            initialValue={true}
            valuePropName="checked"
            name={'is_active'}
          >
            <Checkbox>Активная запись</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'} block>
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
