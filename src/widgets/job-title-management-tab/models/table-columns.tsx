import { Tag } from 'antd';
import dayjs from 'dayjs';

export const TABLE_COLUMNS = [
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
];
