import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { CgOrganisation } from 'react-icons/cg';

import { dictionaryApi } from 'pages/dictionary-organization-page/api';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { dictionaryQueryKey } from 'shared/lib/query';

export function DictionaryOrganizationPage(): ReactElement {
  const organizationColumns = [
    { title: 'Наименование', dataIndex: 'name' },
    { title: 'ИНН', dataIndex: 'inn_number' },
    { title: 'КПП', dataIndex: 'kpp_number' },
  ];

  return (
    <DictionaryPage
      icon={CgOrganisation}
      title={'Организации'}
      columns={organizationColumns}
      modalCreateTitle={'Создание новой организации'}
      modalEditTitle={'Редактирование организации'}
      queryKey={dictionaryQueryKey.organization()}
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
          <Form.Item
            label={'ИНН'}
            name={'inn_number'}
            rules={[{ required: true, message: 'Пожалуйста, введите ИНН' }]}
          >
            <Input placeholder={'NNNNXXXXXC'} minLength={10} maxLength={12} />
          </Form.Item>
          <Form.Item
            label={'КПП'}
            name={'kpp_number'}
            rules={[{ required: true, message: 'Пожалуйста, введите КПП' }]}
          >
            <Input placeholder={'NNNNXXCCC'} maxLength={12} />
          </Form.Item>
        </>
      }
    />
  );
}
