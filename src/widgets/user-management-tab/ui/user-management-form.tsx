import { Button, Form, type FormInstance, Input, Radio, Select } from 'antd';
import { ReactElement } from 'react';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { MdAdminPanelSettings, MdManageAccounts } from 'react-icons/md';

import { formRules } from 'widgets/user-management-tab/models/form-rules.ts';

import { Label } from 'shared/ui';

type Props<T> = {
  form: FormInstance<T>;
  onFinish?: ((values: T) => void) | undefined;
  loading?: boolean;
  onValuesChange?: () => void;
};

export function UserManagementForm<T>(props: Props<T>): ReactElement {
  return (
    <Form onValuesChange={props.onValuesChange} form={props.form} layout={'vertical'} onFinish={props.onFinish}>
      <div className={'grid grid-cols-1 gap-2 lg:grid-cols-2'}>
        <Form.Item name={'username'} rules={formRules.userName}>
          <Input placeholder={'Имя пользователя'} />
        </Form.Item>
        <Form.Item name={'email'} rules={formRules.email}>
          <Input placeholder={'E-mail'} />
        </Form.Item>
      </div>
      <div className={'grid grid-cols-1 gap-2 lg:grid-cols-3'}>
        <Form.Item name={'first_name'} rules={formRules.firstName}>
          <Input placeholder={'Имя'} />
        </Form.Item>
        <Form.Item name={'last_name'} rules={formRules.lastName}>
          <Input placeholder={'Фамилия'} />
        </Form.Item>
        <Form.Item name={'middle_name'}>
          <Input placeholder={'Отчество'} />
        </Form.Item>
      </div>
      <div className={'grid grid-cols-1 gap-2 lg:grid-cols-2'}>
        <Form.Item name={'department_id'} rules={formRules.departmentId}>
          <Select placeholder={'Отдел'} />
        </Form.Item>
        <Form.Item name={'job_title_id'} rules={formRules.jobTitleId}>
          <Select placeholder={'Должность'} />
        </Form.Item>
      </div>
      <Form.Item
        name="is_active"
        initialValue={true}
        label={<Label icon={IoShieldCheckmarkSharp} title={'Статус пользователя'} />}
      >
        <Radio.Group
          block
          options={[
            { label: 'Активирован', value: true },
            { label: 'Деактивирован', value: false },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item
        name="is_superuser"
        initialValue={false}
        label={<Label icon={MdAdminPanelSettings} title={'Администратор системы'} />}
      >
        <Radio.Group
          block
          options={[
            { label: 'Администратор', value: true },
            { label: 'Нет', value: false },
          ]}
          optionType="button"
          buttonStyle="outline"
        />
      </Form.Item>
      <Form.Item
        name="is_stuff"
        initialValue={false}
        label={<Label icon={MdManageAccounts} title={'Менеджер системы'} />}
      >
        <Radio.Group
          block
          options={[
            { label: 'Менеджер', value: true },
            { label: 'Нет', value: false },
          ]}
          optionType="button"
          buttonStyle="outline"
        />
      </Form.Item>
      <Form.Item name="groups" label={<Label icon={MdManageAccounts} title={'Группы пользователя'} />}>
        <Select mode={'tags'} placeholder={'Группы пользователя'} />
      </Form.Item>
      <Form.Item>
        <Button loading={props.loading} htmlType={'submit'} type={'primary'} block>
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
}
