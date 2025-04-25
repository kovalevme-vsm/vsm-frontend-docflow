import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Tag,
  Upload,
} from 'antd';
import { ReactElement } from 'react';
import {
  TbChevronLeft,
  TbFiles,
  TbLink,
  TbMailDown,
  TbMailUp,
  TbPlus,
} from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { AppendixTypesSelect } from 'entities/appendix-types-select';
import { ConfidentialityLevelSelect } from 'entities/confidentiality-level-select';
import { OrganizationSelect } from 'entities/organization-select';
import { OutgoingSelect } from 'entities/outgoing-select';
import { PersonSelect } from 'entities/person-select';
import { UserManagementSelect } from 'entities/user-management-select';

import { IconButton, Label } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const currentAppendixType = Form.useWatch('appendix-type', form);
  console.log(currentAppendixType, form);
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbMailDown} title={'Регистрация входящего'} />
      </div>
      <div className={'flex w-full justify-end'}>
        <Tag>Черновик</Tag>
      </div>
      <Form
        variant={'filled'}
        form={form}
        onFinish={(value) => {
          console.log(value);
        }}
        className={'grid grid-cols-1 gap-2'}
      >
        <Card variant="borderless" size={'small'}>
          <div className={'mt-2 grid grid-cols-2 gap-2'}>
            <UserManagementSelect label={''} />
            <ConfidentialityLevelSelect label={''} />
          </div>
        </Card>
        <Card
          title={<Label icon={TbMailUp} title={'Внешние данные'} />}
          variant="borderless"
          size={'small'}
        >
          <div className={'grid grid-cols-4 gap-2'}>
            <Form.Item className={'!mb-0'}>
              <DatePicker className={'!w-full'} placeholder={'Дата'} />
            </Form.Item>
            <Form.Item className={'!mb-0'}>
              <Input placeholder={'Исходящий номер'} />
            </Form.Item>
            <PersonSelect label={''} />
            <OrganizationSelect label={''} />
          </div>
        </Card>
        <Card
          size={'small'}
          title={<Label icon={TbPlus} title={'Дополнительно'} />}
          variant="borderless"
        >
          <div className={'grid grid-cols-4 gap-2'}>
            <Form.Item className={'!mb-0'}>
              <InputNumber
                className={'!w-full'}
                min={1}
                placeholder={'Количество листов'}
              />
            </Form.Item>
            <AppendixTypesSelect />

            <Form.Item className={'!mb-0'}>
              <InputNumber
                min={0}
                className={'!w-full'}
                placeholder={'Листов приложений'}
              />
            </Form.Item>

            <Form.Item className={'!mb-0'}>
              <Checkbox>Бумажный носитель документа</Checkbox>
            </Form.Item>
            <Form.Item className={'col-span-4 !mb-0'}>
              <Input.TextArea placeholder={'Содержание'} />
            </Form.Item>
          </div>
        </Card>
        <div className={'flex gap-2'}>
          <Card
            className={'h-fit flex-1'}
            size={'small'}
            variant="borderless"
            title={<Label icon={TbLink} title={'Связать с исходящими'} />}
          >
            <OutgoingSelect />
          </Card>
          <Card
            size={'small'}
            className={'w-full flex-1'}
            variant="borderless"
            title={<Label icon={TbFiles} title={'Файлы'} />}
          >
            <Upload listType="text">
              <Button block variant={'filled'} color={'default'}>
                Добавить файлы
              </Button>
            </Upload>
          </Card>
        </div>
        <div className={'mt-2 flex gap-2'}>
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'}>
              Сохранить
            </Button>
          </Form.Item>
          <Button danger={true}>Отменить</Button>
        </div>
      </Form>
    </div>
  );
}
