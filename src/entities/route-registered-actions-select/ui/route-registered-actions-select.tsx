import { Form, SelectProps } from 'antd';
import type { NamePath } from 'rc-field-form/lib/interface';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { documentActionsQueryKey } from 'shared/lib/query/keys/document-actions.ts';
import { documentActionsApiPath } from 'shared/lib/query/path/document-actions.ts';

interface Props extends SelectProps {
  label?: string;
  name: NamePath;
  placeholder?: string;
}

export function RouteRegisteredActionsSelect({
  label,
  name,
  placeholder = 'Доступные действия',
  ...props
}: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={name}
      // rules={[{ required: true, message: 'Пожалуйста, выберите действие' }]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={placeholder}
        fieldNames={{
          label: 'name',
          value: 'code',
        }}
        filterOption={false}
        queryKey={documentActionsQueryKey.documentActionsAllRegistered()}
        path={documentActionsApiPath.documentActionsAllRegistered}
        {...props}
      />
    </Form.Item>
  );
}
