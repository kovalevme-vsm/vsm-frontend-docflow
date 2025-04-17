import { createElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  icon: IconType;
  iconClass?: string;
};

export function Label(props: Props) {
  return (
    <label
      className={
        'flex items-center gap-2 text-sm font-normal !text-gray-400 select-none'
      }
    >
      {createElement(props.icon, { className: `text-lg ${props.iconClass}` })}{' '}
      {props.title}
    </label>
  );
}
