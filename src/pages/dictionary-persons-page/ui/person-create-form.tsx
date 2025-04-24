import { Button, Divider, Form, Input } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement } from 'react';
import { TbMinus } from 'react-icons/tb';

import { InputNumber } from 'entities/input-number';
import { OrganizationSelect } from 'entities/organization-select';
import { PersonsRoles, PersonsRoleSelect } from 'entities/persons-role-select';

export function PersonCreateForm(): ReactElement {
  const form = Form.useFormInstance();
  const currentRole = Form.useWatch('role', form);
  const organizations = Form.useWatch('organizations', form);

  console.log(organizations);
  return (
    <>
      <Form.Item
        label={'Имя'}
        name={'first_name'}
        rules={[{ required: true, message: 'Пожалуйста, введите Имя' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'Фамилия'}
        name={'last_name'}
        rules={[{ required: true, message: 'Пожалуйста, введите Фамилию' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'Отчество'}
        name={'middle_name'}
        rules={[{ required: true, message: 'Пожалуйста, введите Отчество' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={'E-mail'} name={'email'} rules={[{ type: 'email' }]}>
        <Input placeholder={'example@example.com'} />
      </Form.Item>
      <InputNumber label={'Номер телефона'} />
      <PersonsRoleSelect label={'Роль'} />
      <AnimatePresence>
        {currentRole === PersonsRoles.LEGAL && (
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -10,
              opacity: 0,
            }}
          >
            <Divider />
            <Form.List
              name="organizations"
              initialValue={['']}
              rules={[
                {
                  validator: async (_, organizations) => {
                    if (!organizations || organizations.length < 1) {
                      return Promise.reject(
                        new Error('Укажите не менее одной организации')
                      );
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={index === 0 ? 'Организации' : ''}
                      required={false}
                      key={field.key}
                    >
                      <div className={'flex gap-2'}>
                        <OrganizationSelect
                          label={''}
                          className={'flex-1'}
                          formListField={{ ...field, name: index }}
                          enabledFastCreate={false}
                        />
                        {index > 0 && (
                          <Button
                            className="dynamic-delete-button"
                            icon={<TbMinus />}
                            danger
                            onClick={() => remove(field.name)}
                          ></Button>
                        )}
                      </div>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button block onClick={() => add()}>
                      Добавить организацию
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
