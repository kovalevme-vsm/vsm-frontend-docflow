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
        {createElement(props.icon, { className: 'text-2xl' })}
        <div className={'flex flex-col'}>
          <span className={'font-medium'}>{props.title}</span>
          <span className={'text-xs'}>{props.description}</span>
        </div>
      </div>
      <Divider className={'!my-4'} />
    </>
  );
}
