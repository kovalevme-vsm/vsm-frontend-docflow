import { Button, Form, Input, Radio } from 'antd';
import { ReactElement, useCallback, useEffect } from 'react';
import { BiSave } from 'react-icons/bi';
import { IoIosArrowBack, IoIosWarning } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router';

import { useUpdateRouteManagement } from 'pages/system-settings/system-settings-route-management-detail/api/use-update-route-management.ts';
import { RouteData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import SelectInfinite from 'entities/select-infinite';

import { QUERY, ROUTES } from 'shared/const';

type Props = {
  data?: RouteData;
};

export function RouteManagementBaseSegment(props: Props): ReactElement {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { mutate: onUpdateRoute, isPending } = useUpdateRouteManagement(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.data) form.setFieldsValue(props.data);
  }, [props.data]);

  const handleBack = useCallback(() => {
    form.resetFields();
    navigate(ROUTES.SYSTEM_SETTINGS_ROUTE_MANAGEMENT);
  }, []);

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
        <span className={'flex items-center gap-2 text-xs text-yellow-400'}>
          <IoIosWarning />
          Маршрут будет выключен, пока в нем нет ниодного шага.
        </span>
      )}
      <Form.Item>
        <div className={'mt-4 flex justify-end gap-2'}>
          <Button onClick={handleBack} icon={<IoIosArrowBack />}>
            К списку маршрутов
          </Button>
          <Button loading={isPending} htmlType={'submit'} type={'primary'} icon={<BiSave />}>
            Сохранить
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
