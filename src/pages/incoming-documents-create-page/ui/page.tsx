import { Button, Form, Tabs, Tag } from 'antd';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { TbHistory, TbMailPlus } from 'react-icons/tb';

import { FileAttachIncomingDocument } from 'pages/incoming-documents-create-page/ui/file-attach-incoming-document.tsx';
import { MainIncomingDocumentForm } from 'pages/incoming-documents-create-page/ui/main-incoming-document-form.tsx';

import { PageHeader } from 'widgets/page-header';

import { Label } from 'shared/ui';

export function IncomingDocumentsCreatePage(): ReactElement {
  return (
    <div className={'space-y-4 pb-4'}>
      <PageHeader icon={TbMailPlus} title={'Создание входящего документа'} />
      <Form
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <section className={'flex items-center justify-between gap-2'}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={'flex gap-2'}
          >
            <Button htmlType={'submit'} type={'primary'}>
              Сохранить
            </Button>
            <Button danger>Отменить</Button>
          </motion.div>
          <div className={'flex items-center gap-2'}>
            <Label title={'Статус:'} icon={TbHistory} />
            <Tag>Черновик</Tag>
          </div>
        </section>
        <div className={'mb-4'} />
        <Tabs
          type="card"
          size={'small'}
          items={[
            {
              label: 'Общее',
              key: 'main-form',
              children: <MainIncomingDocumentForm />,
            },
            {
              label: 'Файлы',
              key: 'file-attach',
              children: <FileAttachIncomingDocument />,
            },
          ]}
        />
      </Form>
    </div>
  );
}
