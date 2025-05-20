import { Button, Divider, Form, Input, Modal, Radio } from 'antd';
import { Fragment, ReactElement } from 'react';
import { FiSave } from 'react-icons/fi';
import { IoFootsteps } from 'react-icons/io5';
import { RiInfoCardLine } from 'react-icons/ri';
import { TbPlus } from 'react-icons/tb';

import { Empty } from 'entities/empty';
import { SectionHeader } from 'entities/section-header';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';
import { Label } from 'shared/ui';

export default function SystemSettingsRouteManagementCreate(): ReactElement {
  return (
    <div className={'flex h-full flex-col'}>
      <SectionHeader
        icon={TbPlus}
        title={'Создание нового маршрута'}
        description={'Создавайте, редактируйте, удаляйте маршруты для каждого типа документов'}
      />
      <Form
        onFinish={(values) => {
          Modal.confirm({
            title: 'Вы уверены, что хотите создать маршрут без единого шага?',
            content: 'При подтверждении действия, маршрут будет создан, как неактивный.',
            centered: true,
            okText: 'Подтвердить',
            onOk: () => {
              values.is_active = false;
              console.log(values);
            },
          });
        }}
      >
        <div className={'flex gap-2'}>
          <div className={'flex-1'}>
            <Label title={'Общая информация о маршруте'} icon={RiInfoCardLine} />
            <Form.Item name={'name'} rules={[{ required: true, message: 'Пожалуйста, укажите имя маршрута' }]}>
              <Input placeholder={'Название маршрута'} allowClear />
            </Form.Item>
            <Form.Item name="is_active" initialValue={true}>
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
            <Form.Item name={'document_type'} rules={[{ required: true, message: 'Пожалуйста, укажите тип маршрута' }]}>
              <SelectInfinite
                apiPath={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.paths.index}
                queryKey={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.keys.list}
                placeholder={'Тип маршрута'}
                allowClear
              />
            </Form.Item>
            <Form.Item name={'description'}>
              <Input.TextArea
                placeholder={'Описание маршрута'}
                rows={3}
                showCount
                maxLength={100}
                style={{ resize: 'none' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type={'primary'} icon={<FiSave />} htmlType={'submit'}>
                Сохранить
              </Button>
            </Form.Item>
          </div>
          <Divider type={'vertical'} className={'!h-auto'} />
          <div className={'flex-1'}>
            <div className={'flex items-center justify-between'}>
              <Label title={'Шаги маршрута'} icon={IoFootsteps} />
              <Button size={'small'} type={'primary'}>
                Добавить шаг
              </Button>
            </div>
            <Form.List name={'steps'} initialValue={[]}>
              {(fields) =>
                fields.map((field) => (
                  <Fragment key={field.key}>
                    <span>{field.name}</span>
                  </Fragment>
                ))
              }
            </Form.List>
            <Empty />
          </div>
        </div>
      </Form>
    </div>
  );
}
