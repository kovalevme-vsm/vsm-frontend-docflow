import { Form, FormListFieldData } from 'antd';
import type { NamePath } from 'rc-field-form/lib/interface';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { routeApiPath, routeQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
  name?: NamePath;
  formListField?: FormListFieldData;
};

export function RouteParticipantTypeSelect({
  label,
  name,
  formListField,
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        { required: true, message: 'Пожалуйста, выберите тип участника' },
      ]}
      {...formListField}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Тип участника'}
        filterOption={false}
        queryKey={routeQueryKey.routeParticipantTypes()}
        path={routeApiPath.routeParticipantTypes}
      />
    </Form.Item>
  );
}
