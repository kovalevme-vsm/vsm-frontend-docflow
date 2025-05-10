import { Button, Divider, Drawer, Form, Popconfirm, Radio } from 'antd';
import {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { TbSwitch, TbTextCaption } from 'react-icons/tb';

import { useDictionaryItemCreate } from 'widgets/dictionary-manager/api/use-dictionary-item-create.ts';
import { useDictionaryItemDelete } from 'widgets/dictionary-manager/api/use-dictionary-item-delete.ts';
import { useDictionaryItemUpdate } from 'widgets/dictionary-manager/api/use-dictionary-item-update.ts';
import { useDictionaryItemsRetrieve } from 'widgets/dictionary-manager/api/use-dictionary-items-retrieve.ts';

import { Label } from 'shared/ui';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  formFields: () => ReactNode;
  code: string;
  id: string | null;
}

export function DrawerDictionaryManager<T extends { id: string }>({
  isOpen,
  onClose,
  formFields,
  code,
  id,
}: Props): ReactElement {
  const [form] = Form.useForm();

  const {
    mutate: onCreateItem,
    isPending: isPendingCreate,
    isSuccess: isSuccessCreate,
  } = useDictionaryItemCreate<T>(code);

  const { data } = useDictionaryItemsRetrieve<T>(code, id);

  const { mutate: onUpdateItem, isSuccess: isSuccessUpdate } =
    useDictionaryItemUpdate(code, id);

  const { mutate: onDeleteItem } = useDictionaryItemDelete(code, id);

  const handleClose = useCallback(() => {
    form.resetFields();
    onClose();
  }, [form, onClose]);

  const handleSubmit = useCallback(
    (values: T) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      id ? onUpdateItem(values) : onCreateItem(values);
    },
    [id, onUpdateItem, onCreateItem]
  );

  const handleDelete = useCallback(() => {
    onDeleteItem();
    handleClose();
  }, [onDeleteItem]);

  const title = useMemo(
    () => (id ? 'Редактирование элемента' : 'Создание нового элемента'),
    [id]
  );

  useEffect(() => {
    if (id && isOpen && data) {
      form.setFieldsValue(data);
    }
  }, [id, isOpen, data]);

  useEffect(() => {
    if (isSuccessUpdate || isSuccessCreate) {
      handleClose();
    }
  }, [isSuccessUpdate, isSuccessCreate]);

  const footerButtons = useMemo(() => {
    if (!id) {
      return (
        <Popconfirm
          title="Все данные будут утеряны, вы уверены?"
          onConfirm={handleClose}
        >
          <Button block danger>
            Отменить и закрыть
          </Button>
        </Popconfirm>
      );
    }
    return (
      <Popconfirm
        title="Вы уверены, что хотите удалить элемент?"
        onConfirm={handleDelete}
      >
        <Button block danger>
          Удалить
        </Button>
      </Popconfirm>
    );
  }, [id, handleClose, handleDelete]);

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      closable={false}
      footer={null}
      classNames={{ wrapper: '!w-full md:!w-2/3 lg:!w-1/3' }}
    >
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <div className="w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50">
          <TbTextCaption className="text-5xl text-blue-500" />
        </div>
        <h1 className="text-center text-xl font-medium">{title}</h1>
      </div>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {formFields()}
        <Form.Item
          label={<Label icon={TbSwitch} title="Состояние элемента" />}
          initialValue={true}
          name="is_active"
        >
          <Radio.Group
            block
            options={[
              { label: 'Вкл.', value: true },
              { label: 'Выкл.', value: false },
            ]}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
        <Divider />
        <Form.Item>
          <div className="flex gap-2">
            {footerButtons}
            <Button
              loading={isPendingCreate}
              type="primary"
              block
              htmlType="submit"
            >
              Сохранить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Drawer>
  );
}
