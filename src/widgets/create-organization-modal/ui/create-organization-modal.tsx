import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { CgOrganisation } from 'react-icons/cg';

import { useCreateOrganization } from 'widgets/create-organization-modal/api/use-create-organization.ts';

type Props = {
  modalOpen: boolean;
  onCancel?: () => void;
};

export function CreateOrganizationModal(props: Props): ReactElement {
  const [form] = Form.useForm();
  const {
    mutate: onCreateOrganization,
    isPending,
    isSuccess,
  } = useCreateOrganization();

  const onCancelCreate = () => {
    form.resetFields();
    if (props.onCancel) {
      props.onCancel();
    }
  };

  useEffect(() => {
    if (isSuccess && props.onCancel) {
      onCancelCreate();
    }
  }, [isSuccess]);

  return (
    <Modal
      centered
      open={props.modalOpen}
      onCancel={onCancelCreate}
      footer={null}
    >
      <div className={'my-6 flex flex-col items-center justify-center gap-2'}>
        <div className={'w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50'}>
          <CgOrganisation className={'text-5xl text-blue-500'} />
        </div>
        <h1 className={'text-xl font-medium'}>Создание новой организации</h1>
      </div>
      <Form
        form={form}
        clearOnDestroy={true}
        layout={'vertical'}
        onFinish={onCreateOrganization}
      >
        <Form.Item
          label={'Наименование'}
          name={'name'}
          rules={[
            { required: true, message: 'Пожалуйста, введите наименование' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={'ИНН'}
          name={'inn_number'}
          rules={[{ required: true, message: 'Пожалуйста, введите ИНН' }]}
        >
          <Input placeholder={'NNNNXXXXXC'} minLength={10} maxLength={12} />
        </Form.Item>
        <Form.Item
          label={'КПП'}
          name={'kpp_number'}
          rules={[{ required: true, message: 'Пожалуйста, введите КПП' }]}
        >
          <Input placeholder={'NNNNXXCCC'} maxLength={12} />
        </Form.Item>
        <Form.Item
          initialValue={'checked'}
          valuePropName="checked"
          name={'is_active'}
        >
          <Checkbox>Активная организация</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            loading={isPending}
            htmlType={'submit'}
            type={'primary'}
            block
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
