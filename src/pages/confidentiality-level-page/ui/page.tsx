import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { CgOrganisation } from 'react-icons/cg';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function ConfidentialityLevelPage(): ReactElement {
  const confidentialityColumns = [{ title: 'Наименование', dataIndex: 'name' }];

  return (
    <DictionaryPage
      icon={CgOrganisation}
      title={'Степени конфиденциальности'}
      columns={confidentialityColumns}
      modalCreateTitle={'Создание степени конфиденциальности'}
      modalEditTitle={'Редактирование степени конфиденциальности'}
      queryKey={dictionaryQueryKey.confidentialityLevel()}
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
