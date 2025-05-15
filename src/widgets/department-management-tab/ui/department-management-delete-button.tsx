import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbRowRemove } from 'react-icons/tb';

import { useDeleteDepartmentManagement } from 'widgets/department-management-tab/api/use-delete-department-management.ts';

type Props = {
  id: string;
};

export function DepartmentManagementDeleteButton(props: Props): ReactElement {
  const { mutate: onDeleteDepartment, isPending: isPendingDelete } = useDeleteDepartmentManagement();
  return (
    <Button
      loading={isPendingDelete}
      type={'link'}
      size={'small'}
      danger
      icon={<TbRowRemove />}
      onClick={() => onDeleteDepartment({ id: props.id })}
    >
      Удалить
    </Button>
  );
}
