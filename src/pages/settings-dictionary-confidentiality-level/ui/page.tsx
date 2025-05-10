import { Form, Input, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TbShieldFilled } from 'react-icons/tb';

import { DictionaryManager } from 'widgets/dictionary-manager';

export function SettingsDictionaryConfidentialityLevel(): ReactElement {
  return (
    <DictionaryManager
      title={'Типы конфиденциальности'}
      icon={TbShieldFilled}
      code={'confidentiality-level'}
      columns={[
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Создано',
          dataIndex: 'created_at',
          key: 'created_at',
          render: (value) => dayjs(value).format('DD MMMM YYYY HH:mm'),
        },
        {
          title: 'Статус',
          dataIndex: 'is_active',
          align: 'center',
          render: (value: boolean) => (
            <Tag color={value ? 'success' : 'error'}>
              {value ? 'Вкл' : 'Выкл'}
            </Tag>
          ),
        },
      ]}
      formFields={() => (
        <>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Пожалуйста, введите название' },
            ]}
          >
            <Input placeholder={'Название'} />
          </Form.Item>
        </>
      )}
    />
  );
}
