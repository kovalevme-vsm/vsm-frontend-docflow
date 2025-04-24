import { Form, FormListFieldData, Input } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { apiClient } from 'shared/lib/axios';
import { dictionaryApiPath, dictionaryQueryKey } from 'shared/lib/query';

type OrganizationSelectProps = {
  enabledFastCreate?: boolean;
  formListField?: FormListFieldData;
  label?: string;
  className?: string;
};

export function OrganizationSelect({
  enabledFastCreate = true,
  formListField,
  label = 'Организация',
  className,
}: OrganizationSelectProps): ReactElement {
  const addOrganization = async (value: any) => {
    const response = await apiClient.post(dictionaryApiPath.organization, {
      inn_number: 'Не указано',
      kpp_number: 'Не указано',
      is_active: true,
      ...value,
    });
    return response.data;
  };

  return (
    <Form.Item
      name={'organization'}
      label={label}
      {...formListField}
      className={className}
      rules={[{ required: true, message: 'Пожалуйста, выберите Организацию' }]}
    >
      <SelectWithAddItem
        placeholder={'Выберите организацию'}
        allowClear
        showSearch={true}
        filterOption={false}
        onAddItem={enabledFastCreate ? addOrganization : undefined}
        queryKey={dictionaryQueryKey.organizationSelect()}
        path={dictionaryApiPath.organization}
        formItems={
          <Form.Item name={'name'}>
            <Input placeholder={'Название организации'} />
          </Form.Item>
        }
      />
    </Form.Item>
  );
}
