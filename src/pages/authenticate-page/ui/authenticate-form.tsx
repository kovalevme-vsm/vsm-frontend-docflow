import { Button, Form, Input } from 'antd';
import { ReactElement } from 'react';
import { TbFingerprint } from 'react-icons/tb';

import { useUserAuthenticateMutation } from 'pages/authenticate-page/api/use-authenticate.ts';
import { AuthenticateFormValue } from 'pages/authenticate-page/types';

import { ApplicationLogo } from 'entities/application-logo';

export function AuthenticateForm(): ReactElement {
  const { mutate: onAuthenticate, isPending } = useUserAuthenticateMutation();
  return (
    <section className={'flex w-fit flex-col gap-2 self-center'}>
      <ApplicationLogo />
      <Form<AuthenticateFormValue> size={'large'} onFinish={onAuthenticate}>
        <Form.Item name={'username'}>
          <Input placeholder={'Имя пользователя'} />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input type={'password'} placeholder={'Пароль'} />
        </Form.Item>
        <Form.Item>
          <Button
            loading={isPending}
            htmlType={'submit'}
            type={'primary'}
            block
          >
            <TbFingerprint />
            Войти
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
