import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { TbStatusChange } from 'react-icons/tb';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryStatusPage(): ReactElement {
  const columns = [{ title: 'Наименование', dataIndex: 'name' }];

  return (
    <DictionaryPage
      icon={TbStatusChange}
      title={'Статусы документов'}
      columns={columns}
      modalCreateTitle={'Создание статуса'}
      modalEditTitle={'Редактирование статуса'}
      queryKey={dictionaryQueryKey.status()}
      api={{
        fetchItems: dictionaryApi.fetchAll,
        createItem: dictionaryApi.create,
        updateItem: dictionaryApi.update,
        deleteItem: dictionaryApi.delete,
      }}
      formFields={
        <>
          <Form.Item
            label={'Наименование'}
            name={'name'}
            rules={[
              { required: true, message: 'Пожалуйста, введите наименование' },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      }
    />
  );
}
