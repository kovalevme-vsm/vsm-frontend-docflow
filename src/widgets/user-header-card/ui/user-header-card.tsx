import { ReactElement } from 'react';
import userAvatar from '../assets/user-avatar.png';

export function UserHeaderCard(): ReactElement {
  return (
    <div className={'flex h-full gap-2'}>
      <div
        className={'flex flex-col items-end text-gray-950 dark:text-gray-50'}
      >
        <span className={'text-sm font-medium'}>Ковалев Максим</span>
        <span className={'text-xs'}>Главный специалист</span>
      </div>
      <img
        className="h-full rounded-full bg-gray-100 p-2 dark:bg-gray-900"
        src={userAvatar}
        alt="Avatar"
      />
    </div>
  );
}
