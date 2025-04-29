import { ReactElement } from 'react';
import { TbArrowDown, TbStatusChange } from 'react-icons/tb';

import { StatusSelect } from 'entities/status-select';

import { Label } from 'shared/ui';

export function RouteStepStatuses(): ReactElement {
  return (
    <div className={'my-4'}>
      <Label title={'Статусы'} icon={TbStatusChange} />
      <StatusSelect
        name={'status_on_start'}
        placeholder={'Статус начала шага'}
      />
      <div className={'my-2 flex items-center justify-center'}>
        <TbArrowDown className={'text-3xl text-gray-200'} />
      </div>
      <StatusSelect
        name={'status_on_complete'}
        placeholder={'Статус завершения шага'}
      />
    </div>
  );
}
