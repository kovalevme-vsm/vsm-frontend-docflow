import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TbEdit } from 'react-icons/tb';

import { GroupsManagementDeleteButton } from 'widgets/groups-management-tab/ui/groups-management-delete-button.tsx';

export const TABLE_COLUMNS = (onEdit: (id: string) => void): ColumnsType => [
  {
    title: 'Название группы',
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: '',
    key: 'id',
    align: 'right',
    render: (value: { id: string }) => {
      return (
        <div className={'flex gap-2'}>
          <Button type={'link'} size={'small'} icon={<TbEdit />} onClick={() => onEdit(value.id)}>
            Редактировать
          </Button>
          <GroupsManagementDeleteButton id={value.id} />
        </div>
      );
    },
  },
];
