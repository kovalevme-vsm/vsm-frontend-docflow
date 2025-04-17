import { motion } from 'framer-motion';
import { createElement, ReactElement, useState } from 'react';
import { IconType } from 'react-icons';
import { useMatch, useNavigate } from 'react-router';
import { TbChevronDown, TbChevronRight } from 'react-icons/tb';

interface Props {
  title: string;
  icon: IconType;
  route: string;
  isChild?: boolean;
  children?: Props[];
}
export function SidebarMenuItem(props: Props): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const isLocationMatch = useMatch(`${props.route}/*`);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const handleClick = () => {
    if (props.children) toggleExpand();
    else navigate(props.route);

    if (props.isChild || !props.children) {
      const element = document.getElementById('vsm-doc-sidebar');
      if (element) {
        element.classList.remove('block');
        element.classList.add('hidden');
      }
    }
  };
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: -10, opacity: 0 }}
    >
      <button
        onClick={handleClick}
        className={`group flex w-full border-l-2 ${isLocationMatch ? '!border-blue-500 !text-blue-500' : 'text-gray-800 dark:text-gray-50'} border-gray-300 px-6 py-2.5 duration-300 hover:cursor-pointer hover:border-blue-500 dark:border-gray-600`}
      >
        <span
          className={`flex ${props.isChild && 'ml-4'} w-full items-center justify-between text-sm font-medium duration-300 group-hover:translate-x-1.5 group-hover:!text-blue-500`}
        >
          <div className={'flex items-center gap-3'}>
            {createElement(props.icon, { className: 'text-lg' })}
            {props.title}
          </div>
          {props.children && isExpanded && <TbChevronDown />}
          {props.children && !isExpanded && <TbChevronRight />}
        </span>
      </button>
      {isExpanded &&
        props.children &&
        props.children.map((value) => {
          return (
            <SidebarMenuItem key={value.route} {...value} isChild={true} />
          );
        })}
    </motion.div>
  );
}
