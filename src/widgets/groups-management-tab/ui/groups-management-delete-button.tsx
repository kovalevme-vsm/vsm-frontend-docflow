import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbRowRemove } from 'react-icons/tb';

import { useDeleteGroupsManagement } from 'widgets/groups-management-tab/api/use-delete-groups-management.ts';

type Props = {
  id: string;
};

export function GroupsManagementDeleteButton(props: Props): ReactElement {
  const { mutate: onDeleteGroups, isPending: isPendingDelete } = useDeleteGroupsManagement();
  return (
    <Button
      loading={isPendingDelete}
      type={'link'}
      size={'small'}
      danger
      icon={<TbRowRemove />}
      onClick={() => onDeleteGroups({ id: props.id })}
    >
      Удалить
    </Button>
  );
}
