import { ButtonHTMLAttributes, createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { TbLoader2 } from 'react-icons/tb';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  variant?: 'default' | 'primary' | 'danger' | 'dangerOutline';
  loading?: boolean;
  icon?: IconType;
  iconClassName?: string;
}

export function Button({
  children,
  icon,
  className,
  type = 'button',
  variant = 'default',
  block = false,
  disabled = false,
  loading = false,
  ...props
}: Props): ReactElement {
  const buttonVariant = {
    default: 'button-default',
    primary: 'button-primary',
    danger: 'button-danger',
    dangerOutline: 'button-danger-outline',
  } as const;

  return (
    <button
      type={type}
      className={`${block ? 'w-full' : 'w-fit'} button ${loading ? 'button-loading' : disabled ? 'button-disabled' : buttonVariant[variant]} ${className}`}
      {...props}
    >
      {loading && createElement(TbLoader2, { className: 'animate-spin' })}
      {icon &&
        createElement(icon, { className: `${props.iconClassName} text-lg` })}
      {children}
    </button>
  );
}
