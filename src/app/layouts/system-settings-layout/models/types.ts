import { IconType } from 'react-icons';
import { To } from 'react-router';

export interface SettingsItem {
  title: string;
  path: To;
  icon: IconType;
}
