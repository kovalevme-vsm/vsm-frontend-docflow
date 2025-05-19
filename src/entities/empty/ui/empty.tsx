import { ReactElement } from 'react';

export function Empty(): ReactElement {
  return (
    <div className={'my-8 flex flex-col items-center justify-center'}>
      <div className={'flex h-12 w-52 items-center gap-2 rounded-xl bg-gray-200/60 px-3 py-2.5 dark:bg-gray-800'}>
        <div className={'aspect-square h-full rounded-lg bg-gray-300/70 dark:bg-gray-700/70'}></div>
        <div className={'flex w-full flex-col gap-1'}>
          <div className={'h-2 w-full rounded-lg bg-gray-300/70 dark:bg-gray-700/70'}></div>
          <div className={'h-1.5 w-1/2 rounded-lg bg-gray-300/70 dark:bg-gray-700/70'}></div>
        </div>
      </div>
      <div className={'mt-2 flex flex-col items-center justify-center'}>
        <span className={'text-sm font-medium text-gray-400 dark:text-gray-600'}>Объекты отсутствуют</span>
        <span className={'text-xs text-gray-400 dark:text-gray-600'}>
          Пока нет данных. Мы сообщим вам, когда появятся обновления.
        </span>
      </div>
    </div>
  );
}
