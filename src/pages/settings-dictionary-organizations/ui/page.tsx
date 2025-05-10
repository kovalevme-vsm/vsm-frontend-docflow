import { Form, Input, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement } from 'react';
import { TbBuilding } from 'react-icons/tb';

import { DictionaryManager } from 'widgets/dictionary-manager';

export function SettingsDictionaryOrganizations(): ReactElement {
  return (
    <DictionaryManager
      title={'Организации'}
      icon={TbBuilding}
      code={'organization'}
      columns={[
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'ИНН',
          dataIndex: 'inn_number',
          key: 'inn_number',
        },
        {
          title: 'КПП',
          dataIndex: 'kpp_number',
          key: 'kpp_number',
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
          <Form.Item name="inn_number">
            <Input placeholder={'ИНН'} />
          </Form.Item>
          <Form.Item name="kpp_number">
            <Input placeholder={'КПП'} />
          </Form.Item>
        </>
      )}
    />
  );
}
