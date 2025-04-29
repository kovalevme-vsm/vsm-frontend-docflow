import { Button, Divider, Drawer, Form, FormInstance } from 'antd';
import { ReactElement } from 'react';

import { StepRoute } from 'pages/settings-routes-create-page/models/types.ts';
import { RouteStepIsRequired } from 'pages/settings-routes-create-page/ui/form-items/route-step-is-required.tsx';
import { RouteStepName } from 'pages/settings-routes-create-page/ui/form-items/route-step-name.tsx';
import { RouteStepParticipants } from 'pages/settings-routes-create-page/ui/form-items/route-step-participants.tsx';
import { RouteStepStatuses } from 'pages/settings-routes-create-page/ui/form-items/route-step-statuses.tsx';

import { RouteStepTypeSelect } from 'entities/route-step-type-select';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAddNewStep: (value: StepRoute) => void;
  form: FormInstance;
};

export function CreateRouteStepModal(props: Props): ReactElement {
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.onClose}
      footer={null}
      title={'Создание нового шага'}
      classNames={{ wrapper: '!w-full md:!w-2/3 lg:!w-1/3' }}
    >
      <Form form={props.form} onFinish={props.onAddNewStep}>
        <RouteStepName />
        <RouteStepTypeSelect />
        <RouteStepIsRequired />
        <Divider />
        <RouteStepStatuses />
        <Divider />
        <RouteStepParticipants />
        <Divider />
        <Form.Item>
          <Button htmlType={'submit'} block type={'primary'}>
            Добавить шаг
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
