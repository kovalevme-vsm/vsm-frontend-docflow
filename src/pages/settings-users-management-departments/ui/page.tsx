import { Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TbBinaryTree2Filled, TbChevronLeft } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useDepartmentsManagementItemsList } from 'pages/settings-users-management-departments/api/use-departments-management-items-list.ts';

import { PageHeader } from 'widgets/page-header';

import { IconButton, Table } from 'shared/ui';

export function SettingsUsersManagementDepartments(): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useDepartmentsManagementItemsList();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbBinaryTree2Filled} title={'Отделы'} />
      </div>
      <Table
        dataSource={data?.results}
        loading={isPending}
        total={data?.count}
        columns={[
          {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Создано',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (value) => dayjs(value).format('DD MMMM YYYY HH:mm'),
          },
          {
            title: 'Статус',
            dataIndex: 'is_active',
            align: 'center',
            render: (value: boolean) => (
              <Tag color={value ? 'success' : 'error'}>
                {value ? 'Вкл' : 'Выкл'}
              </Tag>
            ),
          },
        ]}
      />
    </div>
  );
}
