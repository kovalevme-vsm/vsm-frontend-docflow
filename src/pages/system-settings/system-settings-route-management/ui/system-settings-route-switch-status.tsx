import { Switch } from 'antd';
import { ReactElement } from 'react';

import { useUpdateActiveStatusRouteManagement } from 'pages/system-settings/system-settings-route-management/api/use-update-active-status-route-management.ts';

type Props = {
  id: string;
  is_active: boolean;
};

export function SystemSettingsRouteSwitchStatus(props: Props): ReactElement {
  const { mutate: onChangeRouteStatus, isPending } = useUpdateActiveStatusRouteManagement(props.id);
  return (
    <Switch
      loading={isPending}
      size={'small'}
      onChange={(e) => {
        onChangeRouteStatus({ is_active: e });
      }}
      checkedChildren="Вкл"
      unCheckedChildren="Выкл"
      defaultChecked={props.is_active}
      className="custom-switch"
    />
  );
}
