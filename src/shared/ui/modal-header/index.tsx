import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon: IconType;
  title: string;
};

export function ModalHeader({ icon, title }: Props): ReactElement {
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-2">
      <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
        {createElement(icon, { className: 'text-5xl text-blue-500' })}
      </div>
      <h1 className="text-center text-xl font-medium">{title}</h1>
    </div>
  );
}
