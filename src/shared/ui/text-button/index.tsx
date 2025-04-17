import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  onClick?: () => void;
  title: string;
  icon: IconType;
};

export function TextButton(props: Props): ReactElement {
  return (
    <button
      onClick={props.onClick}
      type={'button'}
      className={
        'flex cursor-pointer items-center gap-2 text-sm text-gray-500 duration-300 hover:text-blue-500 active:text-blue-500'
      }
    >
      {createElement(props.icon)}

      <span>{props.title}</span>
    </button>
  );
}
