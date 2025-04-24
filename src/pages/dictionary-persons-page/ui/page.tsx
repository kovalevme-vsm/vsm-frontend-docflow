import { ReactElement } from 'react';
import { TbUsers } from 'react-icons/tb';

import { PersonCreateForm } from 'pages/dictionary-persons-page/ui/person-create-form.tsx';

import { DictionaryPage } from 'widgets/dictionary-page/ui/dictionary-page.tsx';

import { PersonsRoles } from 'entities/persons-role-select';

import { dictionaryQueryKey } from 'shared/lib/query';

import { dictionaryApi } from '../api';

export function DictionaryPersonsPage(): ReactElement {
  const columns = [
    { title: 'Имя', dataIndex: 'first_name' },
    { title: 'Фамилия', dataIndex: 'last_name' },
    { title: 'Отчество', dataIndex: 'middle_name' },
    { title: 'E-mail', dataIndex: 'email' },
    { title: 'Номер телефона', dataIndex: 'phone_number' },
    {
      title: 'Роль',
      dataIndex: 'role',
      render: (value: string) => {
        if (value === PersonsRoles.INDIVIDUAL) {
          return 'Физическое лицо';
        }
        if (value === PersonsRoles.LEGAL) {
          return 'Представитель юридического лица';
        }
      },
    },
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
      formFields={<PersonCreateForm />}
    />
  );
}
