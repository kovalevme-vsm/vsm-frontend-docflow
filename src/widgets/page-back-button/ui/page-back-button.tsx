import { ReactElement } from 'react';
import { TbArrowBigLeftFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router';

export function PageBackButton(): ReactElement {
  const navigate = useNavigate();
  return (
    <button
      title={'Назад'}
      onClick={() => navigate(-1)}
      type={'button'}
      className={
        'flex aspect-square cursor-pointer items-center rounded-2xl bg-gray-100 p-4 text-gray-950 outline outline-gray-100 duration-300 hover:text-blue-500 hover:outline-blue-500 focus:outline-blue-500 dark:bg-gray-800/70 dark:text-gray-50 dark:outline-gray-800/70'
      }
    >
      <TbArrowBigLeftFilled className={''} />
    </button>
  );
}
