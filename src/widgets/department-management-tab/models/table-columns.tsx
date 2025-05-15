import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { TbEdit } from 'react-icons/tb';

import { DepartmentManagementDeleteButton } from 'widgets/department-management-tab/ui/department-management-delete-button.tsx';

export const TABLE_COLUMNS = (onEdit: (id: string) => void): ColumnsType => [
  {
    title: 'Название отдела',
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
  {
    dataIndex: '',
    key: 'id',
    fixed: 'right',
    render: (value: { from_ldap: boolean; id: string }) => {
      return (
        <div className={'flex gap-2'}>
          {value.from_ldap && (
            <Button type={'link'} size={'small'} icon={<TbEdit />} onClick={() => onEdit(value.id)}>
              Редактировать
            </Button>
          )}
          <DepartmentManagementDeleteButton id={value.id} />
        </div>
      );
    },
  },
];
