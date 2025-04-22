import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { TbUser } from 'react-icons/tb';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryJobTitlePage(): ReactElement {
  const jobTitleColumns = [{ title: 'Наименование', dataIndex: 'name' }];

  return (
    <DictionaryPage
      icon={TbUser}
      title={'Должности'}
      columns={jobTitleColumns}
      modalCreateTitle={'Создание новой должности'}
      modalEditTitle={'Редактирование должности'}
      queryKey={dictionaryQueryKey.jobTitle()}
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
