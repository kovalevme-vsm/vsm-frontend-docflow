import { Divider } from 'antd';
import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

export function SectionHeader(props: Props): ReactElement {
  return (
    <>
      <div className={'flex items-center gap-4'}>
        {createElement(props.icon, { className: 'text-2xl dark:text-gray-50' })}
        <div className={'flex flex-col'}>
          <span className={'font-medium dark:text-gray-50'}>{props.title}</span>
          <span className={'text-xs dark:text-gray-50'}>{props.description}</span>
        </div>
      </div>
      <Divider className={'!my-4'} />
    </>
  );
}
