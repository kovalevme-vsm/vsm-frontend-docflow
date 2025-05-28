import { Button, Form, Input, Popconfirm, Radio } from 'antd';
import { ReactElement, useEffect } from 'react';
import { BiSave } from 'react-icons/bi';
import { IoIosWarning } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import { useParams } from 'react-router';

import { useDeleteRouteManagement } from 'pages/system-settings/system-settings-route-management-detail/api/use-delete-route-management.ts';
import { useUpdateRouteManagement } from 'pages/system-settings/system-settings-route-management-detail/api/use-update-route-management.ts';
import { RouteData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

type Props = {
  data?: RouteData;
};

export function RouteManagementBaseSegment(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { mutate: onUpdateRoute, isPending } = useUpdateRouteManagement(id);
  const { mutate: onDeleteRoute, isPending: isPendingDelete } = useDeleteRouteManagement();

  useEffect(() => {
    if (props.data) form.setFieldsValue(props.data);
  }, [props.data]);

  return (
    <Form form={form} onFinish={onUpdateRoute}>
      <Form.Item<RouteData>
        messageVariables={{ label: 'Наименование маршрута' }}
        name={'name'}
        rules={[{ required: true }]}
      >
        <Input placeholder={'Наименование маршрута'} />
      </Form.Item>
      <Form.Item<RouteData>
        messageVariables={{ label: 'Тип маршрута' }}
        name={'document_type'}
        rules={[{ required: true }]}
      >
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.keys.list}
          placeholder={'Тип маршрута'}
          allowClear
        />
      </Form.Item>
      <Form.Item<RouteData>
        messageVariables={{ label: 'Описание маршрута' }}
        name={'description'}
        rules={[{ required: true }]}
      >
        <Input.TextArea
          placeholder={'Описание маршрута'}
          rows={3}
          showCount
          maxLength={100}
          style={{ resize: 'none' }}
        />
      </Form.Item>
      {props.data && props.data.steps_count > 0 ? (
        <Form.Item<RouteData> name="is_active" initialValue={true}>
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
      ) : (
        <span className={'mt-4 flex items-center gap-2 text-xs text-yellow-400'}>
          <IoIosWarning />
          Управление статусом маршрута недоступно - отсутсвуют этапы маршрута.
        </span>
      )}
      <Form.Item>
        <div className={'mt-4 flex justify-end gap-2'}>
          {props.data && props.data.can_delete && (
            <Popconfirm
              title={'Вы уверены что хотите удалить шаблон маршрут'}
              okButtonProps={{ danger: true, loading: isPendingDelete }}
              okText={'Удалить'}
              onConfirm={() => onDeleteRoute({ id })}
            >
              <Button loading={isPending} type={'primary'} danger icon={<TiDelete />}>
                Удалить маршрут
              </Button>
            </Popconfirm>
          )}
          <Button loading={isPending} htmlType={'submit'} type={'primary'} icon={<BiSave />}>
            Сохранить
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
