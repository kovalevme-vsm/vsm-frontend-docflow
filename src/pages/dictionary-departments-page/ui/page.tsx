import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { TbHierarchy } from 'react-icons/tb';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { DepartmentCodeSelect } from 'entities/department-code-select';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryDepartmentPage(): ReactElement {
  const columns = [
    { title: 'Наименование', dataIndex: 'name' },
    { title: 'Ключ', dataIndex: 'code' },
  ];

  return (
    <DictionaryPage
      icon={TbHierarchy}
      title={'Дирекции и отделы'}
      columns={columns}
      modalCreateTitle={'Создание новой записи'}
      modalEditTitle={'Редактирование записи'}
      queryKey={dictionaryQueryKey.department()}
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
          <DepartmentCodeSelect />
        </>
      }
    />
  );
}
