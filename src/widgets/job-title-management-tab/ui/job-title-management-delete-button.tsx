import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbRowRemove } from 'react-icons/tb';

import { useDeleteJobTitleManagement } from 'widgets/job-title-management-tab/api/use-delete-job-title-management.ts';

type Props = {
  id: string;
};

export function JobTitleManagementDeleteButton(props: Props): ReactElement {
  const { mutate: onDeleteJobTitle, isPending: isPendingDelete } = useDeleteJobTitleManagement();
  return (
    <Button
      loading={isPendingDelete}
      type={'link'}
      size={'small'}
      danger
      icon={<TbRowRemove />}
      onClick={() => onDeleteJobTitle({ id: props.id })}
    >
      Удалить
    </Button>
  );
}
