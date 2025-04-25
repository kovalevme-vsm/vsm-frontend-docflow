import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { CgOrganisation } from 'react-icons/cg';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryAppendixTypePage(): ReactElement {
  const columns = [{ title: 'Наименование', dataIndex: 'name' }];

  return (
    <DictionaryPage
      icon={CgOrganisation}
      title={'Типы приложений'}
      columns={columns}
      modalCreateTitle={'Создание типа приложения'}
      modalEditTitle={'Редактирование типа приложения'}
      queryKey={dictionaryQueryKey.appendixType()}
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
