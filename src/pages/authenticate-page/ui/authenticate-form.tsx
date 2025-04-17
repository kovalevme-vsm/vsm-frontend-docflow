import { ReactElement } from 'react';
import { Button, Input, InputPassword } from 'shared/ui';
import { TbFingerprint } from 'react-icons/tb';
import { ApplicationLogo } from 'widgets/application-logo';

export function AuthenticateForm(): ReactElement {
  return (
    <form className={'flex w-fit flex-col gap-2 self-center'}>
      <ApplicationLogo />
      <Input placeholder={'Имя пользователя'} />
      <InputPassword placeholder={'Пароль'} />
      <Button type={'submit'} variant={'primary'} block icon={TbFingerprint}>
        Войти
      </Button>
    </form>
  );
}
