import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import notFound from '../assets/404.svg';

export function NotFoundRoutePath(): ReactElement {
  const navigate = useNavigate();
  return (
    <main
      className={
        'flex h-dvh w-screen flex-col justify-center bg-neutral-50 p-4 dark:bg-gray-950'
      }
    >
      <div className={'flex h-fit w-full flex-col items-center text-center'}>
        <img
          className="w-1/2 md:w-1/3 lg:w-1/4"
          src={notFound}
          loading="lazy"
        />
        <h1
          className={
            'text-xl font-medium text-gray-950 md:text-2xl lg:text-3xl dark:text-gray-50'
          }
        >
          Упс...Такой страницы не существует
        </h1>
        <span className={'text-sm text-gray-400 lg:text-base'}>
          Мы не смогли найти запрашиваемую Вами страницу, но Вы можете вернуться
          назад
        </span>
        <Button
          onClick={() => navigate(-1)}
          className={'mt-4'}
          type={'primary'}
        >
          <TbArrowBackUp />
          Назад
        </Button>
      </div>
    </main>
  );
}
