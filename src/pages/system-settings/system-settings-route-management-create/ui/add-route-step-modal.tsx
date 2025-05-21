import { Form, Modal } from 'antd';
import { ReactElement, useCallback } from 'react';
import { IoFootsteps } from 'react-icons/io5';

import { RouteManagementStepForm } from 'entities/route-management-form';
import { IRouteStep } from 'entities/route-management-form/models/types.ts';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAddRouteStep: (values: IRouteStep) => void;
};

export function AddRouteStepModal({ isOpen, onClose, onAddRouteStep }: Props): ReactElement {
  const [form] = Form.useForm<IRouteStep>();

  const handleAddRouteStep = useCallback(async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    if (values) {
      onAddRouteStep(values);
    }
  }, []);

  return (
    <Modal centered open={isOpen} onCancel={onClose} onOk={handleAddRouteStep} okText={'Добавить'}>
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <IoFootsteps className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">Добавление шага маршрута</h1>
      </div>
      <RouteManagementStepForm form={form} />
    </Modal>
  );
}
