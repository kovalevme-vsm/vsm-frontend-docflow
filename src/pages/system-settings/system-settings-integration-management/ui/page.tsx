import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbApi, TbSettings } from 'react-icons/tb';

import { SectionHeader } from 'entities/section-header';

import firstCCompany from '../assets/1C.svg';
import ad from '../assets/AD.svg';
import diadoc from '../assets/diadoc.svg';
import extern from '../assets/extern.svg';

export default function SystemSettingsIntegrationManagement(): ReactElement {
  return (
    <div>
      <SectionHeader
        icon={TbApi}
        title={'Интеграции и API'}
        description={'Подключайте новые сервисы, управляйте и просматривайте журналы интеграций'}
      />
      <div className={'grid grid-cols-3 gap-4'}>
        <div className={'flex items-center justify-between rounded-2xl bg-white p-6'}>
          <div className={'space-y-2'}>
            <div
              className={
                'flex aspect-square w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-lg/5'
              }
            >
              <img src={ad} />
            </div>
            <div className={'flex flex-col'}>
              <span className={'font-semibold'}>Active Directory</span>
              <span className={'text-xs'}>Справочник пользователей</span>
            </div>
          </div>
          <div>
            <Button icon={<TbSettings />} />
          </div>
        </div>
        <div className={'flex items-center justify-between rounded-2xl bg-white p-6'}>
          <div className={'space-y-2'}>
            <div
              className={
                'flex aspect-square w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-lg/5'
              }
            >
              <img src={firstCCompany} />
            </div>
            <div className={'flex flex-col'}>
              <span className={'font-semibold'}>1C:Предприятие</span>
              <span className={'text-xs'}>Интеграция с 1C:Бухгалтерия</span>
            </div>
          </div>
          <div>
            <Button icon={<TbSettings />} />
          </div>
        </div>
        <div className={'flex items-center justify-between rounded-2xl bg-white p-6'}>
          <div className={'space-y-2'}>
            <div
              className={
                'flex aspect-square w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-lg/5'
              }
            >
              <img src={diadoc} />
            </div>
            <div className={'flex flex-col'}>
              <span className={'font-semibold'}>Контур Диадок</span>
              <span className={'text-xs'}>Интеграция ЭДО</span>
            </div>
          </div>
          <div>
            <Button icon={<TbSettings />} />
          </div>
        </div>
        <div className={'flex items-center justify-between rounded-2xl bg-white p-6'}>
          <div className={'space-y-2'}>
            <div
              className={
                'flex aspect-square w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-2 shadow-lg/5'
              }
            >
              <img src={extern} />
            </div>
            <div className={'flex flex-col'}>
              <span className={'font-semibold'}>Контур Экстерн</span>
              <span className={'text-xs'}>Интеграция ЭДО</span>
            </div>
          </div>
          <div>
            <Button icon={<TbSettings />} />
          </div>
        </div>
      </div>
    </div>
  );
}
