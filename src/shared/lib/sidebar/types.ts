import { IconType } from 'react-icons';

export interface ISidebarProps {
  title: string;
  icon: IconType;
  route: string;
  isChild?: boolean;
  children?: ISidebarProps[];
}
