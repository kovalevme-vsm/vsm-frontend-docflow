import { Button, Form, Input, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';
import { IoGitBranch } from 'react-icons/io5';

import { useCreateRoute } from 'widgets/route-create-modal/api/use-create-route.ts';
import { RouteCreateFormValues } from 'widgets/route-create-modal/models/type.ts';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';
import { ModalHeader } from 'shared/ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function RouteCreateModal({ isOpen, onClose }: Props): ReactElement {
  const [form] = Form.useForm();
  const { mutate: onCreateRoute, isPending, isSuccess } = useCreateRoute();

  const handleCloseModal = () => {
    form.resetFields();
    onClose();
  };

  useEffect(() => {
    if (isSuccess) handleCloseModal();
  }, [isSuccess]);

  return (
    <Modal centered open={isOpen} onCancel={handleCloseModal} footer={null}>
      <ModalHeader icon={IoGitBranch} title={'Создание нового шаблона маршрута'} />
      <Form form={form} onFinish={onCreateRoute}>
        <Form.Item<RouteCreateFormValues>
          messageVariables={{ label: 'Наименование маршрута' }}
          name={'name'}
          rules={[{ required: true }]}
        >
          <Input placeholder={'Наименование маршрута'} />
        </Form.Item>
        <Form.Item<RouteCreateFormValues>
          messageVariables={{ label: 'Тип маршрута' }}
          name={'document_type'}
          rules={[{ required: true }]}
        >
          <SelectInfinite
            apiPath={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.paths.index}
            queryKey={QUERY.SYSTEM_SELECT_DOCUMENT_TYPES.keys.list}
            placeholder={'Тип маршрута'}
            allowClear
          />
        </Form.Item>
        <Form.Item<RouteCreateFormValues>
          messageVariables={{ label: 'Описание маршрута' }}
          name={'description'}
          rules={[{ required: true }]}
        >
          <Input.TextArea
            placeholder={'Описание маршрута'}
            rows={3}
            showCount
            maxLength={100}
            style={{ resize: 'none' }}
          />
        </Form.Item>
        <Form.Item>
          <div className={'mt-4 flex justify-end gap-2'}>
            <Button danger icon={<AiFillCloseCircle />} onClick={handleCloseModal}>
              Отменить
            </Button>
            <Button loading={isPending} htmlType={'submit'} type={'primary'} icon={<BiSave />}>
              Создать
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default RouteCreateModal;
