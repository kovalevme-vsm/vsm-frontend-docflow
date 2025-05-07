import { Button, Tag } from 'antd';
import dayjs from 'dayjs';
import { TbPencil } from 'react-icons/tb';

export const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
  },
  {
    title: 'Создано',
    dataIndex: 'created_at',
    render: (value: string) => dayjs(value).format('DD/MM/YYYY HH:mm'),
  },
  {
    title: 'Статус',
    dataIndex: 'is_active',
    align: 'center',
    render: (value: boolean) => (
      <Tag color={value ? 'success' : 'error'}>{value ? 'Вкл' : 'Выкл'}</Tag>
    ),
  },
  {
    key: 'actions',
    align: 'right',
    render: () => (
      <Button type={'link'} icon={<TbPencil />}>
        Редактировать
      </Button>
    ),
  },
];
