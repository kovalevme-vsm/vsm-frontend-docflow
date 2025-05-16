import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbRowRemove } from 'react-icons/tb';

import { useDeleteDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-delete-dictionary-management.ts';

type Props = {
  id: string;
  dictionary: string;
};

export function DictionaryManagementDeleteButton(props: Props): ReactElement {
  const { mutate: onDeleteDepartment, isPending: isPendingDelete } = useDeleteDictionaryManagement(props.dictionary);
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
