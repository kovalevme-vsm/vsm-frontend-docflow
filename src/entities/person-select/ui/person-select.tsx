import { Form, FormListFieldData, Input } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { InputNumber } from 'entities/input-number';
import { PersonsRoleSelect } from 'entities/persons-role-select';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type PersonSelectProps = {
  enabledFastCreate?: boolean;
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
};

export function PersonSelect({
  enabledFastCreate = true,
  formListField,
  label = 'Отправитель',
  className,
}: PersonSelectProps): ReactElement {
  const addOrganization = async (value: never) => {
    const response = await apiClient.post(dictionaryApiPath.persons, {
      is_active: true,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ...value,
    });
    return response.data;
  };

  return (
    <Form.Item
      name={'sender'}
      label={label}
      {...formListField}
      className={className}
      rules={[{ required: true, message: 'Пожалуйста, выберите отправителя' }]}
    >
      <SelectWithAddItem
        placeholder={'Выберите отправителя'}
        allowClear
        showSearch={true}
        filterOption={false}
        onAddItem={enabledFastCreate ? addOrganization : undefined}
        queryKey={dictionaryQueryKey.personsSelect()}
        path={dictionaryApiPath.persons}
        formItems={
          <>
            <Form.Item
              className={'flex-1'}
              name={'first_name'}
              rules={[
                { required: true, message: 'Пожалуйста, введите Фамилию' },
              ]}
            >
              <Input placeholder={'Имя'} />
            </Form.Item>
            <Form.Item
              className={'flex-1'}
              name={'last_name'}
              rules={[
                { required: true, message: 'Пожалуйста, введите Фамилию' },
              ]}
            >
              <Input placeholder={'Фамилия'} />
            </Form.Item>
            <Form.Item className={'flex-1'} name={'middle_name'}>
              <Input placeholder={'Отчество'} />
            </Form.Item>
            <Form.Item name={'email'} rules={[{ type: 'email' }]}>
              <Input placeholder={'example@example.com'} />
            </Form.Item>
            <InputNumber />
            <PersonsRoleSelect />
          </>
        }
      />
    </Form.Item>
  );
}
