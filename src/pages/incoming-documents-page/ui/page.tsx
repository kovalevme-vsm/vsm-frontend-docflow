import { ReactElement } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { TbChevronLeft, TbChevronRight, TbMailDown } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { Button } from 'components/ui/button';

import { PageHeader } from 'widgets/page-header';

import { IncomingDocumentTable } from 'entities/incoming-document-table';

import { ROUTES } from 'shared/const';

export function IncomingDocumentsPage(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-3'}>
      <PageHeader icon={TbMailDown} title={'Входящие документы'} />
      <div key={'actions'} className={'flex items-center justify-end'}>
        <Button
          onClick={() => navigate(ROUTES.DOCUMENTS_INCOMING_CREATE)}
          className={'w-full xl:w-fit'}
        >
          <IoMdAddCircleOutline />
          Создать входящий документ
        </Button>
      </div>
      <IncomingDocumentTable />
      <nav
        className="flex items-center justify-end gap-x-1"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="jusify-center inline-flex min-h-9.5 min-w-9.5 items-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-800/40 dark:focus:bg-white/10"
          aria-label="Previous"
        >
          <TbChevronLeft />
          <span className="sr-only">Предыдущая</span>
        </button>
        <div className="flex items-center gap-x-1">
          <button
            type="button"
            className="flex min-h-9.5 min-w-9.5 items-center justify-center rounded-lg bg-gray-200 px-3 py-2 text-sm text-gray-800 focus:bg-gray-300 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-white dark:focus:bg-gray-800"
            aria-current="page"
          >
            1
          </button>
          <button
            type="button"
            className="flex min-h-9.5 min-w-9.5 items-center justify-center rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-800/40 dark:focus:bg-white/10"
          >
            2
          </button>
          <button
            type="button"
            className="flex min-h-9.5 min-w-9.5 items-center justify-center rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-800/40 dark:focus:bg-white/10"
          >
            3
          </button>
        </div>
        <button
          type="button"
          className="jusify-center inline-flex min-h-9.5 min-w-9.5 items-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-800/40 dark:focus:bg-white/10"
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <TbChevronRight />
        </button>
      </nav>
    </div>
  );
}
