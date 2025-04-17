import { ReactElement } from 'react';
import { TbEye, TbEyeOff } from 'react-icons/tb';

type Props = {
  passwordShow: boolean;
  handlePasswordShow: () => void;
};

export function PasswordEye(props: Props): ReactElement {
  return (
    <button type={'button'} onClick={props.handlePasswordShow}>
      {props.passwordShow ? (
        <TbEye className={'cursor-pointer text-xl text-blue-500'} />
      ) : (
        <TbEyeOff
          className={'cursor-pointer text-xl text-gray-400 hover:text-blue-500'}
        />
      )}
    </button>
  );
}
