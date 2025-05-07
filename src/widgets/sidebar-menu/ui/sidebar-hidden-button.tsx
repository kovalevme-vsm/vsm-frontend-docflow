import { Button } from 'antd';
import { ReactElement } from 'react';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

export function SidebarHiddenButton(): ReactElement {
  return (
    <Button
      className={'mt-4 !flex xl:!hidden'}
      onClick={() => {
        const element = document.getElementById('vsm-doc-sidebar');
        if (element) {
          element.classList.remove('block');
          element.classList.add('hidden');
        }
      }}
      block
    >
      <TbLayoutSidebarLeftCollapse />
      Скрыть меню
    </Button>
  );
}
