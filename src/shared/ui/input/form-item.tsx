import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
  error?: string;
  className?: string;
}

export function FormItem({ error, children, className }: Props): ReactElement {
  return (
    <div className={className}>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={'text-sm !text-red-500'}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
