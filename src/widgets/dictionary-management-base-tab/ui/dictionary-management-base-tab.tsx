import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ReactElement, ReactNode } from 'react';
import { TbEdit, TbPlus } from 'react-icons/tb';

import { useListDictionaryManagement } from 'widgets/dictionary-management-base-tab/api/use-list-dictionary-management.ts';
import {
  useDictionaryManagementCreateModal,
  useDictionaryManagementEditModal,
} from 'widgets/dictionary-management-base-tab/models/hooks.ts';
import { DictionaryManagementCreate } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-create.tsx';
import { DictionaryManagementDeleteButton } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-delete-button.tsx';
import { DictionaryManagementUpdate } from 'widgets/dictionary-management-base-tab/ui/dictionary-management-update.tsx';

import { Search, Table } from 'shared/ui';

interface Props<T> {
  dictionaryKey: string;
  columns: ColumnsType<T>;
  formFields?: ReactNode;
}

export function DictionaryManagementBaseTab<T>(props: Props<T>): ReactElement {
  const { data: dictionaryManagementList, isPending: isPendingDictionary } = useListDictionaryManagement<T>(
    props.dictionaryKey
  );
  const { handleCloseCreateModal, handleOpenCreateModal, createModalActive } = useDictionaryManagementCreateModal();
  const { dictionaryEditId, updateModalActive, handleCloseUpdateModal, handleOpenUpdateModal } =
    useDictionaryManagementEditModal();
  return (
    <div className={'space-y-4'}>
      <div className={'flex flex-col gap-2 lg:flex-row'}>
        <Search />
        <Button icon={<TbPlus />} type={'primary'} onClick={handleOpenCreateModal}>
          Создать элемент
        </Button>
      </div>
      <Table<T>
        columns={[
          ...props.columns,
          {
            dataIndex: 'id',
            render: (value: string) => (
              <>
                <Button type={'link'} size={'small'} icon={<TbEdit />} onClick={() => handleOpenUpdateModal(value)}>
                  Редактировать
                </Button>
                <DictionaryManagementDeleteButton dictionary={props.dictionaryKey} id={value} />
              </>
            ),
          },
        ]}
        loading={isPendingDictionary}
        dataSource={dictionaryManagementList?.results}
        total={dictionaryManagementList?.count}
      />
      <DictionaryManagementCreate<T>
        dictionary={props.dictionaryKey}
        isOpen={createModalActive}
        onCloseModal={handleCloseCreateModal}
        formFields={props.formFields}
      />
      {dictionaryEditId && (
        <DictionaryManagementUpdate
          dictionary={props.dictionaryKey}
          isOpen={updateModalActive}
          onCloseModal={handleCloseUpdateModal}
          editId={dictionaryEditId}
          formFields={props.formFields}
        />
      )}
    </div>
  );
}
