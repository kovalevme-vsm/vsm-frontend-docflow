import { HTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';

import { InputWrapper } from 'shared/ui/input/input-wrapper';
import { InputStatuses } from 'shared/ui/input/types';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  status?: InputStatuses;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  classNameWrapper?: HTMLAttributes<string>['className'];
}

export function Input({
  status = 'default',
  className,
  classNameWrapper,
  type = 'text',
  leftIcon,
  rightIcon,
  ...props
}: Props): ReactElement {
  return (
    <InputWrapper status={status} className={classNameWrapper}>
      {leftIcon}
      <input
        type={type}
        className={`h-full w-full border-none text-sm text-gray-950 placeholder-gray-400 focus:outline-0 active:border-none dark:text-gray-50 dark:placeholder-gray-600 ${className}`}
        {...props}
      />
      {rightIcon}
    </InputWrapper>
  );
}
