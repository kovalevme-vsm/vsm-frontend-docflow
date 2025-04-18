import { ReactElement } from 'react';
import { BsSave, BsSendCheck } from 'react-icons/bs';
import {
  TbCancel,
  TbEdit,
  TbMail,
  TbMailPlus,
  TbPencil,
  TbUsers,
} from 'react-icons/tb';

import { Badge } from 'components/ui/badge.tsx';
import { Button } from 'components/ui/button.tsx';
import { Input } from 'components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/ui/select.tsx';
import { Switch } from 'components/ui/switch.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'components/ui/tabs.tsx';
import { Textarea } from 'components/ui/textarea.tsx';

import { PageHeader } from 'widgets/page-header';

import { DragAndDropUploader, Empty, Label, Table } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  return (
    <div className={'space-y-4 pb-4'}>
      <PageHeader icon={TbMailPlus} title={'Создание входящего документа'} />
      <section className={'flex items-center justify-end gap-2'}>
        <Badge variant={'outline'}>Черновик</Badge>
      </section>
      <Tabs defaultValue="main">
        <TabsList className={'w-full'}>
          <TabsTrigger value={'main'}>Общее</TabsTrigger>
          <TabsTrigger value={'files'}>Файлы</TabsTrigger>
          <TabsTrigger value={'bundle'}>Связи</TabsTrigger>
          <TabsTrigger value={'worker'}>Исполнители</TabsTrigger>
        </TabsList>
        <TabsContent value="main" className={'mt-4 space-y-4'}>
          <section className={'grid grid-cols-4 items-center gap-2'}>
            <Input placeholder={'Входящий номер'} disabled />
            <Input placeholder={'Дата'} />
            <Input placeholder={'Адресат'} />
            <Select>
              <SelectTrigger className={'w-full'}>
                <SelectValue placeholder={'Гриф'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'confidence'}>Конфиденциально</SelectItem>
                <SelectItem value={'dsp'}>ДСП</SelectItem>
                <SelectItem value={'kt'}>Коммерческая тайна</SelectItem>
              </SelectContent>
            </Select>
          </section>
          <section className={'flex gap-2'}>
            <Input placeholder={'Дата исходящего'} />
            <Input placeholder={'Исходящий номер'} />
            <Input placeholder={'Отправитель'} />
            <Input placeholder={'Организация'} />
          </section>
          <section className={'flex gap-2'}>
            <Input type={'number'} placeholder={'Листов'} />
            <Input type={'number'} placeholder={'Приложений'} />
            <div className={'flex w-full items-center justify-start gap-2'}>
              <Switch />
              <span className={'text-right text-sm'}>Бумажный носитель</span>
            </div>
          </section>
          <section className={'flex gap-2'}>
            <Textarea placeholder={'Содержание'} />
          </section>
          <section className={'flex flex-col gap-2'}>
            <Label title={'Ответ на исходящий'} icon={TbMail} />

            <Table data={[]} columns={[]} />
            <Button>Добавить</Button>
          </section>
          <section className={'flex flex-col gap-2'}>
            <Label title={'Комментарий'} icon={TbEdit} />
            <Textarea placeholder={''} />
          </section>
        </TabsContent>
        <TabsContent value="files">
          <section className={'mt-4 space-y-4'}>
            <DragAndDropUploader onChange={() => {}} />
            <Table data={[]} columns={[]} />
          </section>
        </TabsContent>
        <TabsContent value={'bundle'} className={'mt-4 space-y-4'}>
          <Button>Добавить новую связь</Button>
          <Table data={[]} columns={[]} />
        </TabsContent>
        <TabsContent value="worker">
          <section className={'mt-4 space-y-4'}>
            <div className={'space-y-2'}>
              <Label title={'Резолюция'} icon={TbPencil} />
              <Textarea placeholder={'Резолюция'} />
            </div>
            <div className={'h-96 w-full space-y-2'}>
              <Label title={'Список исполнителей'} icon={TbUsers} />
              <Empty />
              <Button className={'w-full'}>Добавить исполнителя</Button>
            </div>
          </section>
        </TabsContent>
      </Tabs>
      <section className={'flex items-center justify-end gap-2'}>
        <Button>
          <BsSendCheck /> Сохранить и отправить
        </Button>
        <Button variant={'secondary'}>
          <BsSave /> Сохранить
        </Button>
        <Button
          variant={'outline'}
          className={
            'border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500'
          }
        >
          <TbCancel /> Отменить
        </Button>
      </section>
    </div>
  );
}
