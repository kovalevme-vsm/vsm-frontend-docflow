import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { TbUserEdit } from 'react-icons/tb';

import { UserManagementDeleteButton } from 'widgets/user-management-tab/ui/user-management-delete-button.tsx';

export const TABLE_COLUMNS = (onEdit: (id: string) => void): ColumnsType => [
  {
    title: 'Имя пользователя',
    dataIndex: 'username',
    key: 'username',
    fixed: 'left',
  },
  { title: 'E-mail', dataIndex: 'email', key: 'email' },
  { title: 'Имя', dataIndex: 'first_name', key: 'first_name' },
  { title: 'Фамилия', dataIndex: 'last_name', key: 'last_name' },
  { title: 'Отчество', dataIndex: 'middle_name', key: 'middle_name' },
  { title: 'Должность', dataIndex: 'job_title', key: 'job_title' },
  { title: 'Отдел', dataIndex: 'department', key: 'department' },
  {
    title: 'Статус',
    dataIndex: 'is_active',
    key: 'is_active',
    align: 'center',
    render: (value: boolean) =>
      value ? <Tag color={'success'}>Активен</Tag> : <Tag color={'error'}>Деактивирован</Tag>,
  },
  {
    title: 'Администратор',
    dataIndex: 'is_superadmin',
    key: 'is_superadmin',
    align: 'center',
    render: (value: boolean) => (value ? <Tag color={'success'}>Да</Tag> : <Tag color={'error'}>Нет</Tag>),
  },
  {
    title: 'Менеджер',
    dataIndex: 'is_staff',
    key: 'is_staff',
    align: 'center',
    render: (value: boolean) => (value ? <Tag color={'success'}>Да</Tag> : <Tag color={'error'}>Нет</Tag>),
  },
  {
    title: 'Загружен по LDAP',
    dataIndex: 'is_ldap_user',
    key: 'is_ldap_user',
    align: 'center',
    render: (value: boolean) => (value ? <Tag color={'success'}>Да</Tag> : <Tag color={'error'}>Нет</Tag>),
  },
  {
    title: 'Группы',
    dataIndex: 'group_names',
    key: 'group_names',
    render: (value: string[]) => value.map((tag) => <Tag>{tag}</Tag>),
  },
  {
    title: 'Последний вход',
    dataIndex: 'last_login',
    key: 'last_login',
    render: (value: string | null) => (value ? dayjs(value).format('HH:mm:ss DD MMM YYYY') : 'Не входил'),
  },
  {
    dataIndex: '',
    key: 'id',
    fixed: 'right',
    render: (value: { is_ldap_user: boolean; id: string }) => {
      return (
        <div className={'flex gap-2'}>
          {!value.is_ldap_user && (
            <Button type={'link'} size={'small'} icon={<TbUserEdit />} onClick={() => onEdit(value.id)}>
              Редактировать
            </Button>
          )}
          <UserManagementDeleteButton id={value.id} />
        </div>
      );
    },
  },
];
