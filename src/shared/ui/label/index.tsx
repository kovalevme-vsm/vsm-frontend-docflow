import { createElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  icon: IconType;
  classname?: string;
};

export function Label(props: Props) {
  return (
    <label
      className={`my-2 flex items-center gap-2 text-sm font-normal text-gray-400 select-none ${props.classname}`}
    >
      {createElement(props.icon, { className: `text-lg` })} {props.title}
    </label>
  );
}
