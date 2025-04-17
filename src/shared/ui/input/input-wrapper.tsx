import { HTMLAttributes, PropsWithChildren } from 'react';

import { InputStatuses } from 'shared/ui/input/types';

interface Props extends PropsWithChildren {
  status: InputStatuses;
  className?: HTMLAttributes<string>['className'];
}

export function InputWrapper({ status, children, className }: Props) {
  const inputStatus = {
    default: 'focus-within:outline-blue-500',
    error: 'outline-red-500',
  } as const;
  return (
    <span
      className={`${inputStatus[status]} hover-second-background-color second-background-color flex h-12 w-full items-center justify-between gap-3 rounded-xl px-4 py-1 outline outline-blue-500/0 duration-300 md:h-10 ${className}`}
    >
      {children}
    </span>
  );
}
