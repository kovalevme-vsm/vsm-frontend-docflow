import { ReactElement } from 'react';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { TbFile } from 'react-icons/tb';

import { DragAndDropUploader, Label } from 'shared/ui';


export function FileAttachIncomingDocument():ReactElement {
  return (
    <div className={'space-y-4'}>
      <Label title={'Основные файлы'} icon={TbFile} />
      <DragAndDropUploader onChange={() => {}} />
      <Label
        title={'Дополнительные файлы'}
        icon={IoDocumentAttachOutline}
      />
      <DragAndDropUploader onChange={() => {}} />
    </div>
  )
}