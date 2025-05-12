import { Tag } from 'antd';
import { ReactElement } from 'react';
import { TbChevronLeft, TbUserFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useUserManagementItemsList } from 'pages/settings-users-management-users/api/use-user-management-items-list';

import { PageHeader } from 'widgets/page-header';

import { IconButton, Search, Table } from 'shared/ui';

export function SettingsUsersManagementUsers(): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useUserManagementItemsList();

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbUserFilled} title={'Пользователи'} />
      </div>
      <div>
        <Search />
      </div>
      <Table
        dataSource={data?.results}
        loading={isPending}
        total={data?.count}
        columns={[
          {
            title: 'Имя пользователя',
            dataIndex: 'username',
            key: 'username',
          },
          { title: 'E-mail', dataIndex: 'email', key: 'email' },
          { title: 'Имя', dataIndex: 'first_name', key: 'first_name' },
          { title: 'Фамилия', dataIndex: 'last_name', key: 'last_name' },
          { title: 'Отчество', dataIndex: 'middle_name', key: 'middle_name' },
          { title: 'Должность', dataIndex: 'job_title', key: 'job_title' },
          { title: 'Отдел', dataIndex: 'department', key: 'department' },
          {
            title: 'Группы',
            dataIndex: 'group_names',
            key: 'group_names',
            render: (value: string[]) => value.map((tag) => <Tag>{tag}</Tag>),
          },
        ]}
      />
    </div>
  );
}
