import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { ReactElement } from 'react';
import { TbUsers } from 'react-icons/tb';

import { RouteStepParticipantCreateModal } from 'widgets/route-step-participant-create-modal/ui/route-step-participant-create-modal.tsx';

import { routeStepFormRules } from 'entities/route-forms/models/rules.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';
import { useOpenModal } from 'shared/hooks';
import { Label } from 'shared/ui';

export function RouteStepForm(): ReactElement {
  const { modalActive, handleCloseModal, handleOpenModal } = useOpenModal();
  return (
    <>
      <Form.Item name={'order'} rules={routeStepFormRules.name}>
        <InputNumber className={'!w-full'} min={1} placeholder={'Позиция шага'} />
      </Form.Item>
      <Form.Item name={'name'} rules={routeStepFormRules.name}>
        <Input placeholder={'Название шага'} />
      </Form.Item>
      <Form.Item name={'step_type'} rules={routeStepFormRules.step_type}>
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_STEP_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_STEP_TYPES.keys.list}
          placeholder={'Тип шага'}
        />
      </Form.Item>
      <Form.Item name="is_required" valuePropName="checked" label={null}>
        <Checkbox>Обязательный шаг</Checkbox>
      </Form.Item>
      <div className={'my-2 flex items-center justify-between'}>
        <Label title={'Участники шага маршрута'} icon={TbUsers} />
        <Button type={'primary'} size={'small'} onClick={handleOpenModal}>
          Добавить участника
        </Button>
      </div>
      <RouteStepParticipantCreateModal isOpen={modalActive} onClose={handleCloseModal} />
    </>
  );
}
