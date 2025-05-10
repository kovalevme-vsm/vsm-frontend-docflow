import { Form, Input, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { PiTrafficSignalFill } from 'react-icons/pi';

import { DictionaryManager } from 'widgets/dictionary-manager';

export function SettingsDictionaryStatuses(): ReactElement {
  return (
    <DictionaryManager
      title={'Статусы'}
      icon={PiTrafficSignalFill}
      code={'statuses'}
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
