import { motion } from 'framer-motion';
import { createElement, ReactElement } from 'react';
import { IconType } from 'react-icons';

type PageHeaderProps = {
  icon: IconType;
  title: string;
};

export function PageHeader(props: PageHeaderProps): ReactElement {
  return (
    <header className={'flex w-full gap-2'}>
      <div
        className={
          'flex w-full items-center rounded-2xl bg-gray-100 px-4 py-2 dark:bg-gray-900'
        }
      >
        <motion.div
          className={
            'flex w-fit items-center gap-2 text-lg text-gray-900 md:text-xl dark:text-gray-50'
          }
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {createElement(props.icon, { className: 'text-lg md:text-xl' })}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className={'text-base font-bold uppercase select-none'}
          >
            {props.title}
          </motion.h1>
        </motion.div>
      </div>
    </header>
  );
}
