import { Form, Input, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TbUserFilled } from 'react-icons/tb';

import { DictionaryManager } from 'widgets/dictionary-manager';

export function SettingsDictionaryExternalPersons(): ReactElement {
  return (
    <DictionaryManager
      title={'Внешние пользователи'}
      icon={TbUserFilled}
      code={'external-persons'}
      columns={[
        {
          title: 'Имя',
          dataIndex: 'first_name',
          key: 'first_name',
        },
        {
          title: 'Фамилия',
          dataIndex: 'last_name',
          key: 'last_name',
        },
        {
          title: 'Отчество',
          dataIndex: 'middle_name',
          key: 'middle_name',
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
            name="first_name"
            rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
          >
            <Input placeholder={'Имя'} />
          </Form.Item>
          <Form.Item
            name="last_name"
            rules={[{ required: true, message: 'Пожалуйста, введите фамилия' }]}
          >
            <Input placeholder={'Фамилия'} />
          </Form.Item>
          <Form.Item name="middle_name">
            <Input placeholder={'Отчество'} />
          </Form.Item>
        </>
      )}
    />
  );
}
