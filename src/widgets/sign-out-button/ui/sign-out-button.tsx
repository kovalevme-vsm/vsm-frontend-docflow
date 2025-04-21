import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbDoorExit } from 'react-icons/tb';

import { useSignOutMutation } from 'widgets/sign-out-button/api/use-sign-out-mutation';

export function SignOutButton(): ReactElement {
  const { mutate: onSignOut, isPending } = useSignOutMutation();
  return (
    <Button
      className={'!p-0 !text-gray-500 hover:!text-blue-500'}
      type={'link'}
      loading={isPending}
      onClick={() => {
        onSignOut();
      }}
      icon={<TbDoorExit />}
    >
      Выйти из системы
    </Button>
  );
}
