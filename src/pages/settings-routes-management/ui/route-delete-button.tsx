import { Button, Popconfirm } from 'antd';
import { ReactElement, useEffect } from 'react';
import { IoRemoveCircle } from 'react-icons/io5';

import { useRouteDelete } from 'pages/settings-routes-management/api/use-route-delete.ts';

type Props = {
  routeId: string;
  onSuccess: () => void;
};

export function RouteDeleteButton({ routeId, onSuccess }: Props): ReactElement {
  const { mutate, isPending, isSuccess } = useRouteDelete(routeId);

  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
  }, [isSuccess]);
  return (
    <Popconfirm
      title={'Вы уверены, что хотите удалить маршрут?'}
      okText={'Удалить'}
      okButtonProps={{ danger: true }}
      onConfirm={() => mutate()}
    >
      <Button
        loading={isPending}
        icon={<IoRemoveCircle />}
        danger
        size={'small'}
      >
        Удалить маршрут
      </Button>
    </Popconfirm>
  );
}
