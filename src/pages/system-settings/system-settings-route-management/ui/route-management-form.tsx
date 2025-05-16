import { Button, Card, Form } from 'antd';
import { ReactElement } from 'react';
import { IoFootsteps } from 'react-icons/io5';
import { TbPlus } from 'react-icons/tb';

import { RouteForm } from 'pages/system-settings/system-settings-route-management/ui/route-form.tsx';
import { RouteStepForm } from 'pages/system-settings/system-settings-route-management/ui/route-step-form.tsx';

import { Label } from 'shared/ui';

export function RouteManagementForm(): ReactElement {
  return (
    <Form>
      <RouteForm />
      <Label title={'Шаги маршрута'} icon={IoFootsteps} />
      <Form.List name="participants">
        {(fields, { add, remove }) => (
          <div className={'!space-y-2'}>
            {fields.map(({ key, name }) => (
              <Card size={'small'} variant={'outlined'}>
                <RouteStepForm key={key} headFieldName={name} />
                <Button size={'small'} danger onClick={() => remove(name)}>
                  Удалить
                </Button>
              </Card>
            ))}
            <Form.Item>
              <Button block color={'primary'} onClick={add} variant={'outlined'} icon={<TbPlus />}>
                Добавить шаг
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>
    </Form>
  );
}
