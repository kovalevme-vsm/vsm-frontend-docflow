import { InputHTMLAttributes, ReactElement, useState } from 'react';

import { InputWrapper } from 'shared/ui/input/input-wrapper';
import { PasswordEye } from 'shared/ui/input/password-eye';
import { InputStatuses } from 'shared/ui/input/types';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  status?: InputStatuses;
}

export function InputPassword({
  status = 'default',
  ...props
}: Props): ReactElement {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((value) => !value);

  return (
    <InputWrapper status={status}>
      <input
        autoComplete={'off'}
        type={showPassword ? 'text' : 'password'}
        className={`h-full w-full border-none text-sm text-gray-950 placeholder-gray-400 focus:outline-0 active:border-none dark:text-gray-50 dark:placeholder-gray-600`}
        {...props}
      />
      <PasswordEye
        passwordShow={showPassword}
        handlePasswordShow={handleShowPassword}
      />
    </InputWrapper>
  );
}
