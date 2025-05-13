import { Background, ReactFlow } from '@xyflow/react';
import { Button, Divider, Empty, Modal, Tag, Timeline } from 'antd';
import dayjs from 'dayjs';
import { ReactElement, useState } from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';

import { useRouteStepsList } from 'pages/settings-routes-management/api/use-route-steps-list.ts';
import { CreateRouteStepModal } from 'pages/settings-routes-management/ui/create-route-step-modal.tsx';
import { EditorRouteStepModal } from 'pages/settings-routes-management/ui/editor-route-step-modal.tsx';

interface Props {
  isOpenStepsModal: boolean;
  onCancel: () => void;
  routeId: string | null;
}

export function ViewerRouteStepModal(props: Props): ReactElement {
  const { data } = useRouteStepsList(props.routeId);
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 200, y: 0 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [isOpenEditor, setIsOpenEditor] = useState(false);
  const [isOpenCreator, setIsOpenCreator] = useState(false);
  const [selectedStepId, setSelectedStepId] = useState<string | null>(null);

  const onOpenEditor = (stepId: string) => {
    setIsOpenEditor(true);
    setSelectedStepId(stepId);
  };
  const onCloseEditor = () => {
    setIsOpenEditor(false);
    setSelectedStepId(null);
  };
  const onOpenCreator = () => setIsOpenCreator(true);
  const onCloseCreator = () => setIsOpenCreator(false);

  return (
    <Modal
      open={props.isOpenStepsModal}
      onCancel={props.onCancel}
      footer={null}
      centered
      className={'!w-full md:!w-3/4 lg:!w-1/3'}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <IoFootstepsOutline className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Шаги маршрута</h1>
      </div>
      <Button block type={'primary'} className={'mb-7'} onClick={onOpenCreator}>
        Добавить шаг
      </Button>
      {data?.length && data.length > 0 ? (
        <Timeline
          className={'no-scroll-bar !max-h-72 overflow-y-scroll !pt-4'}
          items={data?.map((value) => ({
            children: (
              <div>
                <div className={'flex flex-row items-center justify-between'}>
                  <span className={'font-medium'}>{value.name}</span>
                  <Tag color={value.is_required ? 'red' : 'success'}>
                    {value.is_required ? 'Обязательный' : 'Необязательный'}
                  </Tag>
                </div>
                <div className={'flex items-center justify-between'}>
                  <span className={'w-full text-xs'}>
                    {dayjs(value.created_at).format('DD MMM YYYY HH:mm')}
                  </span>
                  <Button
                    type={'link'}
                    size={'small'}
                    className={'!text-xs'}
                    onClick={() => onOpenEditor(value.id)}
                  >
                    Редактировать
                  </Button>
                </div>
              </div>
            ),
          }))}
        />
      ) : (
        <Empty description={'Шаги отсутствуют'} />
      )}
      <Divider orientation={'left'}>Визуализация</Divider>
      <div style={{ width: '100%', height: '200px' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges}>
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
      <EditorRouteStepModal
        onCancel={onCloseEditor}
        open={isOpenEditor}
        stepId={selectedStepId || ''}
        routeId={props.routeId}
      />
      <CreateRouteStepModal
        onCancel={onCloseCreator}
        open={isOpenCreator}
        lastOrder={data?.length || 0}
        routeId={props.routeId || ''}
      />
    </Modal>
  );
}
