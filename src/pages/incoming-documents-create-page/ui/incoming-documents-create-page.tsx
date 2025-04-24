import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Tabs,
  Tag,
} from 'antd';
import { ReactElement } from 'react';
import { TbChevronLeft, TbMailDown, TbMailUp, TbPlus } from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { PageHeader } from 'widgets/page-header';

import { ConfidentialityLevelSelect } from 'entities/confidentiality-level-select';
import { OrganizationSelect } from 'entities/organization-select';
import { PersonSelect } from 'entities/person-select';
import { UserManagementSelect } from 'entities/user-management-select';

import { IconButton, Label } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  const navigate = useNavigate();
  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbMailDown} title={'Регистрация входящего'} />
      </div>
      <div className={'flex w-full justify-end'}>
        <Tag>Черновик</Tag>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: 'Общее',
            key: '21',
            children: (
              <Form className={'grid grid-cols-1 gap-2'}>
                <Card variant="borderless">
                  <div className={'grid grid-cols-4 gap-2'}>
                    <Form.Item className={'!mb-0'} name={'date'}>
                      <DatePicker className={'!w-full'} placeholder={'Дата'} />
                    </Form.Item>
                    <Form.Item className={'!mb-0'}>
                      <Input disabled placeholder={'Входящий номер'} />
                    </Form.Item>
                    <UserManagementSelect label={''} />
                    <ConfidentialityLevelSelect label={''} />
                  </div>
                </Card>
                <Card
                  title={<Label icon={TbMailUp} title={'Внешние данные'} />}
                  variant="borderless"
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
                  title={<Label icon={TbPlus} title={'Дополнительно'} />}
                  variant="borderless"
                >
                  <div className={'grid grid-cols-4 gap-2'}>
                    <Form.Item className={'!mb-0'}>
                      <InputNumber
                        className={'!w-full'}
                        min={1}
                        placeholder={'Листов'}
                      />
                    </Form.Item>
                    <Form.Item className={'!mb-0'}>
                      <InputNumber
                        min={0}
                        className={'!w-full'}
                        placeholder={'Приложений'}
                      />
                    </Form.Item>
                    <Form.Item className={'!mb-0'}>
                      <Checkbox>Бумажный носитель</Checkbox>
                    </Form.Item>
                    <Form.Item className={'col-span-4 !mb-0'}>
                      <Input.TextArea placeholder={'Содержание'} />
                    </Form.Item>
                  </div>
                </Card>
                <div className={'mt-2 flex gap-2'}>
                  <Button type={'primary'}>Сохранить</Button>
                  <Button danger={true}>Отменить</Button>
                </div>
              </Form>
            ),
          },
        ]}
      />
    </div>
  );
}
