import { Form, Input } from 'antd';
import { ReactElement } from 'react';
import { TbUsers } from 'react-icons/tb';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { OrganizationSelect } from 'entities/organization-select';
import { PersonsRoleSelect } from 'entities/persons-role-select';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryPersonsPage(): ReactElement {
  const columns = [
    { title: 'Имя', dataIndex: 'first_name' },
    { title: 'Фамилия', dataIndex: 'last_name' },
    { title: 'Отчество', dataIndex: 'middle_name' },
    { title: 'E-mail', dataIndex: 'email' },
    { title: 'Номер телефона', dataIndex: 'phone_number' },
    { title: 'Роль', dataIndex: 'role' },
    { title: 'Организация', dataIndex: 'organization' },
  ];

  return (
    <DictionaryPage
      icon={TbUsers}
      title={'Физические лица и представители юридических лиц'}
      columns={columns}
      modalCreateTitle={'Создание нового гражданина'}
      modalEditTitle={'Редактирование гражданина'}
      queryKey={dictionaryQueryKey.persons()}
      api={{
        fetchItems: dictionaryApi.fetchAll,
        createItem: dictionaryApi.create,
        updateItem: dictionaryApi.update,
        deleteItem: dictionaryApi.delete,
      }}
      formFields={
        <>
          <Form.Item
            label={'Имя'}
            name={'first_name'}
            rules={[{ required: true, message: 'Пожалуйста, введите Имя' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'Фамилия'}
            name={'last_name'}
            rules={[{ required: true, message: 'Пожалуйста, введите Фамилию' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'Отчество'}
            name={'middle_name'}
            rules={[
              { required: true, message: 'Пожалуйста, введите Отчество' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={'E-mail'} name={'email'}>
            <Input />
          </Form.Item>
          <Form.Item label={'Номер телефона'} name={'phone_number'}>
            <Input />
          </Form.Item>
          <Form.Item
            label={'Роль'}
            name={'role'}
            rules={[{ required: true, message: 'Пожалуйста, выберите Роль' }]}
          >
            <PersonsRoleSelect />
          </Form.Item>
          <Form.Item
            label={'Организация'}
            name={'organization'}
            rules={[
              { required: true, message: 'Пожалуйста, выберите Организацию' },
            ]}
          >
            <OrganizationSelect enabledFastCreate={false} />
          </Form.Item>
        </>
      }
    />
  );
}
