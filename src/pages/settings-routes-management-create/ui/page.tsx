import { Button, Card, Divider, Form, Input, InputNumber, Radio } from 'antd';
import { ReactElement } from 'react';
import { TbChevronLeft, TbMinus, TbRoute2 } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { IconButton } from 'shared/ui';

export function SettingsRoutesManagementCreate(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbRoute2} title={'Создание нового маршрута'} />
      </div>
      <Form
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Card size={'small'}>
          <div className={'grid grid-cols-4 gap-2'}>
            <Form.Item className={'!mb-0'} name={'name'}>
              <Input placeholder={'Название маршрута'} />
            </Form.Item>
            <Form.Item className={'!mb-0'} name={'document_type'}>
              <Input placeholder={'Тип документа'} />
            </Form.Item>
            <Form.Item name="is_required" initialValue={true}>
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
            <Form.Item className={'!mb-0'}>
              <Button block htmlType={'submit'} type={'primary'}>
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
              {fields.map(({ key, name }) => (
                <div key={key} className={'flex gap-2'}>
                  <Form.Item name={[name, 'order']} className={'!mb-0 flex-1'}>
                    <InputNumber
                      className={'!w-full'}
                      min={1}
                      placeholder={'Последовательность шага'}
                    />
                  </Form.Item>
                  <Form.Item name={[name, 'name']} className={'!mb-0 flex-1'}>
                    <Input placeholder={'Наименование шага'} />
                  </Form.Item>
                  <Form.Item
                    name={[name, 'is_required']}
                    initialValue={true}
                    className={'flex-1'}
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
                    onClick={() => remove(name)}
                    icon={<TbMinus />}
                    danger
                  />
                </div>
              ))}
              <Button
                color={'primary'}
                variant={'outlined'}
                block
                onClick={add}
              >
                Добавить новый шаг
              </Button>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
}
