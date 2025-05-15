import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbRowRemove } from 'react-icons/tb';

import { useDeleteUsersManagement } from 'widgets/user-management-tab/api/use-delete-users-management.ts';

type Props = {
  id: string;
};

export function UserManagementDeleteButton(props: Props): ReactElement {
  const { mutate: onDeleteUser, isPending: isPendingDelete } = useDeleteUsersManagement();
  return (
    <Button
      loading={isPendingDelete}
      type={'link'}
      danger
      size={'small'}
      icon={<TbRowRemove />}
      onClick={() => onDeleteUser({ id: props.id })}
    >
      Удалить
    </Button>
  );
}
