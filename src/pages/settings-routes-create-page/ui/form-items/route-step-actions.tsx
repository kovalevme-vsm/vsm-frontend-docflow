import { ReactElement } from 'react';
import { TbActivity } from 'react-icons/tb';

import { RouteRegisteredActionsSelect } from 'entities/route-registered-actions-select';

import { Label } from 'shared/ui';

export function RouteStepActions(): ReactElement {
  return (
    <>
      <RouteRegisteredActionsSelect
        label={<Label title={'Действия'} icon={TbActivity} />}
        name={'allowed_action_codes'}
        mode={'multiple'}
      />
    </>
  );
}
