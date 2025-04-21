import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { ReactElement, useEffect } from 'react';
import { CgOrganisation } from 'react-icons/cg';

import { OrganizationTableType } from 'widgets/organization-table/types.ts';
import { useDeleteOrganization } from 'widgets/update-organization-modal/api/use-delete-organization.ts';
import { useUpdateOrganization } from 'widgets/update-organization-modal/api/use-update-organization.ts';

import {
  dictionaryApiPath,
  dictionaryQueryKey,
  useApiQuery,
} from 'shared/lib/query';

type Props = {
  modalOpen: boolean;
  onCancel?: () => void;
  id: string | null;
};

export function UpdateOrganizationModal(props: Props): ReactElement {
  const [form] = Form.useForm();

  const {
    isPending: isPendingRetrieve,
    data,
    isSuccess: isSuccessLoadingOrganization,
  } = useApiQuery<OrganizationTableType>({
    apiPath: dictionaryApiPath.organizationDetail(props.id),
    queryKey: dictionaryQueryKey.organizationDetail(props.id),
    staleTime: 0,
    retry: false,
    enabled: !!props.id,
  });

  useEffect(() => {
    if (isSuccessLoadingOrganization) {
      form.setFieldsValue(data);
    }
  }, [isSuccessLoadingOrganization]);

  const {
    mutate: onUpdateOrganization,
    isPending,
    isSuccess,
  } = useUpdateOrganization(props.id || '');

  const {
    mutate: onDeleteOrganization,
    isPending: isPendingDelete,
    isSuccess: isSuccessDelete,
  } = useDeleteOrganization(props.id || '');

  const onCancelCreate = () => {
    form.resetFields();
    if (props.onCancel) {
      props.onCancel();
    }
  };

  useEffect(() => {
    if ((isSuccess || isSuccessDelete) && props.onCancel) {
      onCancelCreate();
    }
  }, [isSuccess, isSuccessDelete]);

  return (
    <Modal
      centered
      loading={isPendingRetrieve}
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
      {data && (
        <Form
          form={form}
          initialValues={data}
          clearOnDestroy={true}
          layout={'vertical'}
          onFinish={onUpdateOrganization}
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
          <Form.Item className={'space-y-2'}>
            <Button
              loading={isPending}
              htmlType={'submit'}
              type={'primary'}
              block
            >
              Сохранить
            </Button>
          </Form.Item>
          <Button
            loading={isPendingDelete}
            danger
            block
            onClick={() => onDeleteOrganization()}
          >
            Удалить
          </Button>
        </Form>
      )}
    </Modal>
  );
}
