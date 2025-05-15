import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

export const TABLE_COLUMNS: ColumnsType = [
  {
    title: 'Название должности',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Статус',
    dataIndex: 'is_active',
    key: 'is_active',
    render: (value: boolean) =>
      value ? <Tag color={'success'}>Активен</Tag> : <Tag color={'error'}>Деактивирован</Tag>,
  },
  {
    title: 'Дата и время создания',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (value: string | null) => dayjs(value).format('HH:mm:ss DD MMM YYYY'),
  },
  {
    title: 'Загружен по LDAP',
    dataIndex: 'from_ldap',
    key: 'from_ldap',
    align: 'center',
    render: (value: boolean) => (value ? <Tag color={'success'}>Да</Tag> : <Tag color={'error'}>Нет</Tag>),
  },
];
