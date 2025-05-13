import { Button, Card, Divider, Form, Input, InputNumber, Radio } from 'antd';
import { ReactElement } from 'react';
import { TbChevronLeft, TbMinus, TbRoute2 } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useRouteCreate } from 'pages/settings-routes-management-create/api/use-route-create.ts';

import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function SettingsRoutesManagementCreate(): ReactElement {
  const navigate = useNavigate();
  const { mutate: onCreateRoute, isPending } = useRouteCreate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbRoute2} title={'Создание нового маршрута'} />
      </div>
      <Form onFinish={onCreateRoute}>
        <Card size={'small'}>
          <div className={'grid grid-cols-4 gap-2'}>
            <Form.Item
              className={'mb-0'}
              name={'name'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите имя маршрута!',
                },
              ]}
            >
              <Input placeholder={'Название маршрута'} />
            </Form.Item>
            <Form.Item
              className={'!mb-0'}
              name={'document_type'}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, укажите тип документа!',
                },
              ]}
            >
              <Input placeholder={'Тип документа'} />
            </Form.Item>
            <Form.Item className={'!mb-0'} name="is_active" initialValue={true}>
              <Radio.Group
                block
                options={[
                  { label: 'Вкл.', value: true },
                  { label: 'Выкл.', value: false },
                ]}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
            <Form.Item className={'!mb-0'}>
              <Button
                loading={isPending}
                block
                htmlType={'submit'}
                type={'primary'}
              >
                Сохранить
              </Button>
            </Form.Item>
          </div>
        </Card>
        <div className={'my-4'} />
        <Divider />
        <Form.List name="steps">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card className={'!mb-2'}>
                  <div key={key} className={'flex gap-2'}>
                    <Form.Item
                      {...restField}
                      name={[name, 'order']}
                      className={'!mb-0 flex-1'}
                      rules={[
                        {
                          required: true,
                          message:
                            'Пожалуйста, укажите последовательность шага!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              value &&
                              getFieldValue('steps').filter(
                                (el: { order: number }) => el.order === value
                              ).length > 1
                            ) {
                              return Promise.reject(
                                new Error(
                                  'У вас уже существует шаг с такой последовательностью!'
                                )
                              );
                            }
                            return Promise.resolve();
                          },
                        }),
                      ]}
                    >
                      <InputNumber
                        min={1}
                        className={'!w-full'}
                        placeholder={'Последовательность шага'}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      className={'!mb-0 flex-1'}
                      rules={[
                        {
                          required: true,
                          message: 'Пожалуйста, укажите имя шага!',
                        },
                      ]}
                    >
                      <Input placeholder="Название шага" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'is_required']}
                      className={'!mb-0 flex-1'}
                      initialValue={true}
                    >
                      <Radio.Group
                        block
                        options={[
                          { label: 'Обязательный', value: true },
                          { label: 'Необязательный', value: false },
                        ]}
                        optionType="button"
                        buttonStyle="solid"
                      />
                    </Form.Item>
                    <Button
                      icon={<TbMinus />}
                      danger
                      onClick={() => remove(name)}
                    />
                  </div>
                </Card>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  Добавить шаг
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
}
