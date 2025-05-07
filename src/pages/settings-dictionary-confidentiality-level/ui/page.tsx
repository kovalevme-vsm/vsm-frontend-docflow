import { Button, Drawer, Form, Input, Radio, Tag } from 'antd';
import dayjs from 'dayjs';
import { ReactElement, useState } from 'react';
import {
  TbChevronLeft,
  TbPencil,
  TbPlus,
  TbShield,
  TbSwitch,
  TbTextPlus,
} from 'react-icons/tb';
import { useNavigate } from 'react-router';

import { useCreateItem } from 'pages/settings-dictionary-confidentiality-level/api/use-create-item';
import { useFetchItems } from 'pages/settings-dictionary-confidentiality-level/api/use-fetch-items';

import { PageHeader } from 'widgets/page-header';

import { IconButton, Label, Search, Table } from 'shared/ui';

export function SettingsDictionaryConfidentialityLevel(): ReactElement {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { data, isPending } = useFetchItems();
  const { mutate: onCreateItem } = useCreateItem();

  return (
    <div className={'space-y-4'}>
      <div className={'flex gap-2'}>
        <IconButton onClick={() => navigate(-1)} icon={TbChevronLeft} />
        <PageHeader icon={TbShield} title={'Типы конфиденциальности'} />
      </div>
      <div className={'flex justify-end gap-4'}>
        <Button
          icon={<TbPlus />}
          type={'primary'}
          onClick={() => setModalOpen(true)}
        >
          Создать
        </Button>
        <Search />
      </div>
      <Table
        loading={isPending}
        total={data?.count || 0}
        dataSource={data?.results}
        columns={[
          {
            title: 'Наименование',
            dataIndex: 'name',
          },
          {
            title: 'Создано',
            dataIndex: 'created_at',
            render: (value) => dayjs(value).format('DD/MM/YYYY HH:mm'),
          },
          {
            title: 'Статус',
            dataIndex: 'is_active',
            align: 'center',
            render: (value: boolean) => (
              <Tag color={value ? 'success' : 'error'}>
                {value ? 'Вкл' : 'Выкл'}
              </Tag>
            ),
          },
          {
            key: 'actions',
            align: 'right',
            render: () => (
              <Button type={'link'} icon={<TbPencil />}>
                Редактировать
              </Button>
            ),
          },
        ]}
      />
      <Drawer
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closable={false}
        footer={null}
        classNames={{ wrapper: '!w-full md:!w-2/3 lg:!w-1/3' }}
      >
        <div className={'my-6 flex flex-col items-center justify-center gap-2'}>
          <div className={'w-fit rounded-3xl bg-gray-100 p-3 dark:bg-gray-50'}>
            <TbTextPlus className={'text-5xl text-blue-500'} />
          </div>
          <h1 className={'text-center text-xl font-medium'}>
            Создание нового элемента
          </h1>
        </div>
        <Form layout="vertical" onFinish={onCreateItem}>
          <Form.Item
            name={'name'}
            rules={[{ required: true, message: 'Укажите имя элемента' }]}
          >
            <Input placeholder={'Наименование'} />
          </Form.Item>
          <Form.Item
            label={<Label icon={TbSwitch} title={'Состояние элемента'} />}
            initialValue={true}
            name={'is_active'}
          >
            <Radio.Group
              block
              options={[
                { label: 'Активный', value: true },
                { label: 'Неактивный', value: false },
              ]}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType={'submit'} type={'primary'} block>
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
