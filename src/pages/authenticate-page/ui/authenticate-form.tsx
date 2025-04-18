import { ReactElement } from 'react';
import { TbFingerprint } from 'react-icons/tb';
import { ApplicationLogo } from 'widgets/application-logo';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';

export function AuthenticateForm(): ReactElement {
  return (
    <form className={'flex w-fit flex-col gap-2 self-center'}>
      <ApplicationLogo />
      <Input placeholder={'Имя пользователя'} className={'h-10'} />
      <Input type={'password'} placeholder={'Пароль'} className={'h-10'} />
      <Button type={'submit'} className={'h-10'}>
        <TbFingerprint />
        Войти
      </Button>
    </form>
  );
}
