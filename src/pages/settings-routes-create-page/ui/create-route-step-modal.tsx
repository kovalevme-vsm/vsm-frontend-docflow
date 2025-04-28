import { Modal } from 'antd';
import { ReactElement } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function CreateRouteStepModal(props: Props): ReactElement {
  return (
    <Modal
      open={props.isOpen}
      onCancel={props.onClose}
      centered
      footer={null}
      title={'Создание нового шага'}
    ></Modal>
  );
}
