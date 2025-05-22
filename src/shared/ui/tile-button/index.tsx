import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  type?: 'primary' | 'default' | 'danger';
  icon: IconType;
  title: string;
  onClick?: () => void;
};
export function TileButton({ type = 'default', title, icon, onClick }: Props): ReactElement {
  return (
    <button
      type={'button'}
      onClick={onClick}
      className={`${type === 'primary' ? 'bg-blue-500 text-white hover:text-blue-50' : type === 'danger' ? 'bg-red-500/90 text-white hover:text-blue-50' : 'bg-gray-200/60 hover:text-blue-500'} flex flex-1 cursor-pointer flex-col justify-between gap-1 rounded-xl px-4 py-2 duration-300 hover:scale-95`}
    >
      {createElement(icon, { className: 'self-end text-2xl' })}
      <span className={'self-start text-start text-sm'}>{title}</span>
    </button>
  );
}
