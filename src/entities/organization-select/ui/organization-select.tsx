import { Form, FormListFieldData } from 'antd';
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
  const addOrganization = async (name: string) => {
    const response = await apiClient.post(dictionaryApiPath.organization, {
      name,
      inn_number: 'Не указано',
      kpp_number: 'Не указано',
      is_active: true,
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
      />
    </Form.Item>
  );
}
