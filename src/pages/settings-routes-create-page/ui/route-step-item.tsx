import { Button, Card } from 'antd';
import { ReactElement } from 'react';
import { TbMinus } from 'react-icons/tb';

import { StepRoute } from 'pages/settings-routes-create-page/models/types.ts';

interface Props extends StepRoute {
  onRemoveStep: () => void;
}

export function RouteStepItem(props: Props): ReactElement {
  return (
    <Card size={'small'}>
      <div className={'flex items-center justify-between'}>
        <p className={'text-lg font-medium'}>{props.name}</p>
        <Button onClick={props.onRemoveStep} danger icon={<TbMinus />} />
      </div>
    </Card>
  );
}
