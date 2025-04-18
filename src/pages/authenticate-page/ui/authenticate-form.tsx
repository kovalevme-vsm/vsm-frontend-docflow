import { Button, Input } from 'antd';
import { ReactElement } from 'react';
import { TbFingerprint } from 'react-icons/tb';

import { ApplicationLogo } from 'widgets/application-logo';

export function AuthenticateForm(): ReactElement {
  return (
    <form className={'flex w-fit flex-col gap-2 self-center'}>
      <ApplicationLogo />
      <Input placeholder={'Имя пользователя'} />
      <Input type={'password'} placeholder={'Пароль'} />
      <Button type={'primary'}>
        <TbFingerprint />
        Войти
      </Button>
    </form>
  );
}
