import { IconType } from 'react-icons';
import { createElement, ReactElement } from 'react';

export function IconButton({
  icon,
  title,
  onClick,
  wrapperClassName,
  isActive,
}: {
  icon: IconType;
  isActive?: boolean;
  onClick?: () => void;
  wrapperClassName?: string;
  title?: string;
}): ReactElement {
  return (
    <div
      className={`second-background-color flex h-10 w-fit rounded-xl p-1 ${wrapperClassName}`}
    >
      <button
        title={title}
        onClick={onClick}
        className={`${isActive && 'bg-gray-50 dark:bg-gray-800'} group/inner flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-none p-2 duration-300 hover:bg-gray-50/80 hover:dark:bg-gray-800/80`}
      >
        {createElement(icon, {
          className:
            'text-lg text-gray-950 group-hover/inner:text-blue-500 dark:text-gray-50',
        })}
      </button>
    </div>
  );
}
