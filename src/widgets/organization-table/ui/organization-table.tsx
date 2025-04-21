import { Button, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement, useState } from 'react';
import { TbPencil } from 'react-icons/tb';

import { OrganizationTableType } from 'widgets/organization-table/types.ts';
import { UpdateOrganizationModal } from 'widgets/update-organization-modal';

import {
  dictionaryApiPath,
  DRFListPaginationResponse,
  useApiQuery,
} from 'shared/lib/query';
import { dictionaryQueryKey } from 'shared/lib/query/keys/dictionary.ts';

export function OrganizationTable(): ReactElement {
  const [activeIdItem, setActiveIdItem] = useState<string | null>(null);
  const { isPending, data } = useApiQuery<
    DRFListPaginationResponse<OrganizationTableType>
  >({
    apiPath: dictionaryApiPath.organization,
    queryKey: dictionaryQueryKey.organization(),
    staleTime: 0,
    retry: false,
  });
  return (
    <>
      <Table
        columns={[
          { title: 'Наименование', dataIndex: 'name' },
          { title: 'ИНН', dataIndex: 'inn_number' },
          { title: 'КПП', dataIndex: 'kpp_number' },
          {
            title: 'Статус',
            dataIndex: 'is_active',
            align: 'center',
            render: (value) =>
              value ? (
                <Tag color={'success'}>Активна</Tag>
              ) : (
                <Tag color={'error'}>Неактивна</Tag>
              ),
          },
          {
            title: 'Создано',
            dataIndex: 'created_at',
            render: (value) => dayjs(value).format('DD/MM/YYYY hh:mm'),
          },
          {
            align: 'center',
            render: (value) => (
              <Button
                icon={<TbPencil />}
                onClick={() => setActiveIdItem(value.id)}
                type={'link'}
              >
                Редактировать
              </Button>
            ),
          },
        ]}
        loading={isPending}
        dataSource={data?.results}
        pagination={{}}
      />
      <UpdateOrganizationModal
        modalOpen={!!activeIdItem}
        id={activeIdItem}
        onCancel={() => setActiveIdItem(null)}
      />
    </>
  );
}
