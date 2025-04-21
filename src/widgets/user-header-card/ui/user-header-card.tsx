import { Skeleton } from 'antd';
import { ReactElement } from 'react';

import { useUserHeaderData } from 'widgets/user-header-card/api/use-user-header-data.ts';

import userAvatar from '../assets/user-avatar.png';

export function UserHeaderCard(): ReactElement {
  const { data, isPending } = useUserHeaderData();
  if (isPending) {
    return <Skeleton.Input active />;
  }
  return (
    <div className={'flex h-full gap-2'}>
      <div
        className={'flex flex-col items-end text-gray-950 dark:text-gray-50'}
      >
        <span className={'text-sm font-medium'}>{data?.full_name}</span>
        <span className={'text-xs'}>{data?.job_title}</span>
      </div>
      <img
        className="h-full rounded-full bg-gray-100 p-2 dark:bg-gray-900"
        src={userAvatar}
        alt="Avatar"
      />
    </div>
  );
}
