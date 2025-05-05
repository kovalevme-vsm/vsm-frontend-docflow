import { Button, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TbPlus, TbRoute } from 'react-icons/tb';
import { useNavigate, useSearchParams } from 'react-router';

import { useRouteTemplateList } from 'pages/settings-routes-page/api/use-route-template-list.ts';

import { PageHeader } from 'widgets/page-header';

import { ROUTES } from 'shared/const';

export function SettingsRoutesPage(): ReactElement {
  const navigate = useNavigate();
  const { data, isPending } = useRouteTemplateList();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbRoute} title={'Маршруты'} />
      <div className={'flex justify-end'}>
        <Button
          icon={<TbPlus />}
          type={'primary'}
          onClick={() => {
            navigate(ROUTES.SETTINGS_ROUTES_CREATE);
          }}
        >
          Создать маршрут
        </Button>
      </div>
      <Table
        loading={isPending}
        dataSource={data?.results}
        pagination={{
          total: data?.count,
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
        columns={[
          {
            title: 'Наименование',
            dataIndex: 'name',
          },
          {
            title: 'Тип документа',
            dataIndex: 'document_type_label',
          },
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
        ]}
      />
    </div>
  );
}
