import { ReactElement } from 'react';
import { PageHeader } from 'widgets/page-header';
import { TbMail, TbMailPlus, TbUsers } from 'react-icons/tb';
import { Button, Input, Label, Table } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  return (
    <div className={'space-y-8'}>
      <PageHeader icon={TbMailPlus} title={'Создание входящего документа'} />
      <form className={'w-full space-y-4'}>
        <section className={'flex gap-2'}>
          <Input placeholder={'ВХ-1992_ОТ'} />
          <Input placeholder={'Дата'} />
          <Input placeholder={'Адресат'} />
          <div className="flex items-center gap-x-3">
            <label
              htmlFor="hs-basic-with-description-unchecked"
              className="relative inline-block h-6 w-11 cursor-pointer"
            >
              <input
                type="checkbox"
                id="hs-basic-with-description-unchecked"
                className="peer sr-only"
              />
              <span className="absolute inset-0 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-blue-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 dark:bg-neutral-700 dark:peer-checked:bg-blue-500"></span>
              <span className="absolute start-0.5 top-1/2 size-5 -translate-y-1/2 rounded-full bg-white shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
            </label>
            <label
              htmlFor="hs-basic-with-description-unchecked"
              className="text-sm text-gray-500 dark:text-neutral-400"
            >
              Конфиденциально
            </label>
          </div>
        </section>
        <section className={'flex w-full gap-2'}>
          <Input placeholder={'Исходящий Номер'} />
          <Input placeholder={'Дата исходящего номера'} />
          <Input placeholder={'Отправитель'} />
          <Input placeholder={'Организация'} />
        </section>
        <section className={'flex w-full gap-2'}>
          <Input placeholder={'Содержание'} />
        </section>
        <section className={'flex w-1/2 gap-2'}>
          <Input placeholder={'Количество листов'} />
          <Input placeholder={'Количество листов приложений'} />
        </section>
        <Label title={'Исполнители'} icon={TbUsers} />
        <Table data={[]} columns={[]} />
        <Label title={'Связь с исходящими'} icon={TbMail} />
        <Table data={[]} columns={[]} />
        <Input placeholder={'Комментарий'} />
      </form>
      <div className={'flex flex-col justify-end gap-2 xl:flex-row'}>
        <Button className={'w-full xl:w-fit'} variant={'primary'}>
          Сохранить и отправить
        </Button>
        <Button className={'w-full xl:w-fit'}>Сохранить</Button>
        <Button className={'w-full xl:w-fit'} variant={'dangerOutline'}>
          Отменить
        </Button>
      </div>
    </div>
  );
}
