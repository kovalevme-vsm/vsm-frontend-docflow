import { Background, Controls, type Node, ReactFlow } from '@xyflow/react';
import { Button, Card, Form, Input, Radio } from 'antd';
import { ReactElement, useState } from 'react';
import { TbPlus, TbRoute } from 'react-icons/tb';

import { useRouteCreate } from 'pages/settings-routes-create-page/api/useRouteCreate.ts';
import { StepRoute } from 'pages/settings-routes-create-page/models/types.ts';
import { CreateRouteStepModal } from 'pages/settings-routes-create-page/ui/create-route-step-modal.tsx';
import { RouteStepItem } from 'pages/settings-routes-create-page/ui/route-step-item.tsx';

import { PageHeader } from 'widgets/page-header';

import { RouteDocumentTypeSelect } from 'entities/route-document-type-select';

import '@xyflow/react/dist/style.css';

export function SettingsRoutesCreatePage(): ReactElement {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const { mutate: onCreateRoute, isPending } = useRouteCreate();
  const [steps, setSteps] = useState<StepRoute[]>([]);

  const [formRouteStep] = Form.useForm();
  const [nodes, setNodes] = useState<Node[]>([]);

  const onAddStep = (step: StepRoute): void => {
    setSteps((el) => [...el, { ...step, order: el.length + 1 }]);
    setNodes((el) => [
      ...el,
      {
        id: String(el.length + 1),
        position: { x: 0, y: 200 * el.length + 1 },
        data: { label: step.name },
      },
    ]);
    formRouteStep.resetFields();
    handleCloseModal();
  };
  const onRemoveStep = (index: number): void => {
    setSteps((prevSteps) => {
      return prevSteps.filter((_, i) => i !== index);
    });
  };

  console.log(nodes, steps);
  return (
    <div className={'space-y-4'}>
      <PageHeader icon={TbRoute} title={'Создание маршрута'} />
      <Card variant="borderless" size={'small'}>
        <Form
          name="route"
          className={'grid grid-cols-4 gap-2'}
          onFinish={onCreateRoute}
        >
          <RouteDocumentTypeSelect />
          <Form.Item
            name={'name'}
            rules={[
              { required: true, message: 'Пожалуйста, укажите наименование' },
            ]}
          >
            <Input placeholder={'Наименование'} />
          </Form.Item>
          <Form.Item name={'is_active'} initialValue={true}>
            <Radio.Group
              block
              options={[
                { label: 'Активный', value: true },
                { label: 'Неактивный', value: false },
              ]}
              defaultValue={true}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item>
            <Button
              loading={isPending}
              block
              type={'primary'}
              htmlType={'submit'}
            >
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div />
      <div className={'grid grid-cols-2 gap-4'}>
        <Card variant="borderless" size={'small'}>
          <div className={'h-96'}>
            <ReactFlow nodes={nodes}>
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </Card>
        <div className={'flex flex-col gap-2'}>
          {steps.map((value, index) => (
            <RouteStepItem
              key={value.order}
              {...value}
              onRemoveStep={() => {
                onRemoveStep(index);
              }}
            />
          ))}
          <Button
            onClick={handleOpenModal}
            icon={<TbPlus />}
            size={'large'}
            type={'dashed'}
            block
          >
            Создать новый шаг
          </Button>
        </div>
      </div>
      <CreateRouteStepModal
        form={formRouteStep}
        onAddNewStep={onAddStep}
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
