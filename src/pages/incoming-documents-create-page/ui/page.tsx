import {
  Button,
  DatePicker,
  Divider,
  Input,
  InputNumber,
  Segmented,
  Select,
  Switch,
  Tag,
} from 'antd';
import { ReactElement } from 'react';
import {
  TbCirclePlus,
  TbMailDown,
  TbMailPlus,
  TbMailUp,
  TbPin,
} from 'react-icons/tb';

import { PageHeader } from 'widgets/page-header';

import { OrganizationSelect } from 'entities/organization-select/ui';
import { RecipientSelect } from 'entities/recipient-select';
import { SecurityClassificationSelect } from 'entities/security-classification-select';

import { Label } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  return (
    <div className={'space-y-4 pb-4'}>
      <PageHeader icon={TbMailPlus} title={'Создание входящего документа'} />
      <section className={'flex items-center justify-end gap-2'}>
        <Tag color="default">Черновик</Tag>
      </section>
      <div className={'mb-4'} />
      <Segmented options={['Общее', 'Файлы', 'Связи']} block />
      <div className={'mb-4'} />
      <Label title={'Входящее'} icon={TbMailDown} />
      <section className={'my-4 grid grid-cols-4 gap-2'}>
        <Input
          value={`ВХ-${Math.random().toFixed(2)}`}
          className={'h-9'}
          placeholder={'Входящий номер'}
          disabled
        />
        <DatePicker
          className={'h-9'}
          placeholder={'Дата'}
          format={'DD MMMM YYYY'}
        />
        <RecipientSelect />
        <SecurityClassificationSelect />
      </section>
      <Label title={'Исходяще'} icon={TbMailUp} />
      <section className={'my-4 grid grid-cols-4 gap-2'}>
        <DatePicker
          className={'h-9'}
          placeholder={'Дата'}
          format={'DD MM YYYY'}
        />
        <Select showSearch className={'h-9'} placeholder={'Исходящий номер'} />
        <Input placeholder={'Отправитель'} />
        <OrganizationSelect />
      </section>
      <Label title={'Дополнительно'} icon={TbCirclePlus} />
      <section className={'my-4 grid grid-cols-4 gap-2'}>
        <InputNumber
          min={0}
          className={'!w-full'}
          type={'number'}
          placeholder={'Листов'}
        />
        <InputNumber
          min={0}
          className={'!w-full'}
          type={'number'}
          placeholder={'Приложений'}
        />
        <div className={'flex items-center justify-center gap-2'}>
          <Switch />
          <span className={'text-sm'}>Бумажный носитель</span>
        </div>
      </section>
      <section className={'grid grid-cols-1'}>
        <Input.TextArea
          placeholder={'Содержание'}
          count={{
            show: true,
            max: 200,
          }}
        />
      </section>
      <Label title={'Заметка'} iconClass={'text-yellow-500'} icon={TbPin} />
      <section className={'grid grid-cols-1'}>
        <Input.TextArea
          placeholder={'Заметка будет видна только Вам'}
          count={{
            show: true,
            max: 200,
          }}
        />
      </section>
      <Divider />
      <div className={'flex items-center justify-end gap-2'}>
        <Button type={'primary'}>Сохранить</Button>
        <Button danger>Отменить</Button>
      </div>
    </div>
  );
}
