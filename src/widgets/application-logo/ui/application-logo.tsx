import { motion } from 'framer-motion';
import { memo } from 'react';

import appLogoDark from '../assets/app_logo_dark.png';
import appLogoLight from '../assets/app_logo_light.png';

type ApplicationLogoProps = {
  size?: 'small';
};

export const ApplicationLogo = memo(function ApplicationLogo({
  size,
}: ApplicationLogoProps) {
  return (
    <div
      key={'vsm-app-logo'}
      className={`flex w-fit ${size === 'small' ? 'h-14' : 'h-20'} mr-4 items-center gap-4`}
    >
      <motion.img
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        alt={'ВСМ Документы'}
        src={appLogoLight}
        className={'h-full dark:hidden'}
      />
      <motion.img
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        alt={'ВСМ Документы'}
        src={appLogoDark}
        className={'hidden h-full dark:block'}
      />
      <div className={'h-1/2 w-[1px] bg-gray-200'} />
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        className={'flex flex-1 flex-col'}
      >
        <span
          className={`bg-gradient-to-tr from-[#132685] to-[#466dff] bg-clip-text ${size === 'small' ? 'text-base' : 'text-xl'} font-bold text-transparent dark:from-[#ffff] dark:to-[#ffff]`}
        >
          ВСМ Документы
        </span>
        <span
          className={`${size === 'small' ? 'text-[9px]' : 'text-xs'} text-gray-950 dark:text-white`}
        >
          Корпоративная система документооборота
        </span>
      </motion.div>
    </div>
  );
});
