import { Tooltip } from 'antd';
import { createElement, ReactElement } from 'react';
import { NavLink } from 'react-router';

import { SettingsItem } from '../models/types.ts';

export function SystemSettingsMenuItem(props: SettingsItem): ReactElement {
  return (
    <Tooltip title={props.title} placement={'right'}>
      <NavLink
        to={props.path}
        className={({ isActive }) => `${isActive ? 'text-blue-500' : 'text-gray-950 dark:text-gray-50'} `}
      >
        <div
          className={
            'flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium hover:bg-gray-100 lg:px-4 dark:hover:bg-gray-800'
          }
        >
          {createElement(props.icon, { className: 'text-2xl' })}
        </div>
      </NavLink>
    </Tooltip>
  );
}
