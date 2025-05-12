import { Button } from 'antd';
import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { TbChevronRight } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router';

type Props = {
  title: string;
  icon: IconType;
  route: string;
};

export function NavigationCard(props: Props): ReactElement {
  const navigate = useNavigate();
  return (
    <Link
      to={props.route}
      className={
        'group flex w-full cursor-pointer items-center justify-between rounded-2xl bg-gray-100/50 px-4 py-3 hover:bg-gray-100 dark:bg-gray-800/50 dark:hover:bg-gray-800'
      }
    >
      <div className={'flex items-center gap-3'}>
        <div className={'rounded-xl bg-white p-2'}>
          {createElement(props.icon, { className: 'text-xl text-blue-500' })}
        </div>
        <span
          className={
            'text-sm font-medium duration-300 group-hover:text-blue-500 dark:text-white'
          }
        >
          {props.title}
        </span>
      </div>
      <Button onClick={() => navigate(props.route)} icon={<TbChevronRight />} />
    </Link>
  );
}
