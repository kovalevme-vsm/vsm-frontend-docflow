import { Form } from 'antd';
import { ReactElement } from 'react';

import { SelectWithAddItem } from 'widgets/select-with-add-item';

import { routeApiPath, routeQueryKey } from 'shared/lib/query';

type Props = {
  label?: string;
};

export function RouteDocumentTypeSelect({ label }: Props): ReactElement {
  return (
    <Form.Item
      label={label}
      name={'document_type'}
      rules={[
        { required: true, message: 'Пожалуйста, выберите тип документа' },
      ]}
    >
      <SelectWithAddItem
        allowClear
        showSearch={true}
        placeholder={'Тип документа'}
        filterOption={false}
        queryKey={routeQueryKey.routeDocumentTypes()}
        path={routeApiPath.routeDocumentTypes}
      />
    </Form.Item>
  );
}
