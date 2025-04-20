import {
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
} from 'antd';
import { ReactElement } from 'react';
import { TbCirclePlus, TbMailDown, TbMailUp, TbPin } from 'react-icons/tb';

import { OrganizationSelect } from 'entities/organization-select/ui';
import { RecipientSelect } from 'entities/recipient-select';
import { SecurityClassificationSelect } from 'entities/security-classification-select';
import { SenderSelect } from 'entities/sender-select';

import { Label } from 'shared/ui';

export function MainIncomingDocumentForm(): ReactElement {
  return (
    <>
      <Label title={'Входящее'} icon={TbMailDown} />
      <section className={'mb-4 grid grid-cols-4 gap-2'}>
        <Form.Item name={'incoming_number'}>
          <Input
            value={`ВХ-${Math.random().toFixed(2)}`}
            className={'h-9'}
            placeholder={'Входящий номер'}
            disabled
          />
        </Form.Item>
        <Form.Item name={'date'}>
          <DatePicker
            className={'h-9 w-full'}
            placeholder={'Дата'}
            format={'DD MMMM YYYY'}
          />
        </Form.Item>
        <Form.Item name={'recipient'}>
          <RecipientSelect />
        </Form.Item>
        <Form.Item name={'security_classification'}>
          <SecurityClassificationSelect />
        </Form.Item>
      </section>
      <Label title={'Исходящее'} icon={TbMailUp} />
      <section className={'mb-4 grid grid-cols-4 gap-2'}>
        <Form.Item name={'outgoing_date'}>
          <DatePicker
            disabled
            className={'h-9 w-full'}
            placeholder={'Дата'}
            format={'DD MM YYYY'}
          />
        </Form.Item>
        <Form.Item name={'outgoing_number'}>
          <Select
            showSearch
            className={'h-9'}
            placeholder={'Исходящий номер'}
          />
        </Form.Item>
        <Form.Item name={'sender'}>
          <SenderSelect />
        </Form.Item>
        <Form.Item name={'organization'}>
          <OrganizationSelect />
        </Form.Item>
      </section>
      <Label title={'Дополнительно'} icon={TbCirclePlus} />
      <section className={'mb-4 grid grid-cols-4 gap-2'}>
        <Form.Item name={'sheet_number'}>
          <InputNumber
            min={0}
            className={'!w-full'}
            type={'number'}
            placeholder={'Листов'}
          />
        </Form.Item>
        <Form.Item name={'sheet_additional_number'}>
          <InputNumber
            min={0}
            className={'!w-full'}
            type={'number'}
            placeholder={'Приложений'}
          />
        </Form.Item>
        <div className={'flex items-center justify-center gap-2'}>
          <Form.Item name={'is_paper_medium'} label={'Бумажный носитель'}>
            <Switch />
          </Form.Item>
        </div>
      </section>
      <section className={'grid grid-cols-1'}>
        <Form.Item name={'content'}>
          <Input.TextArea
            placeholder={'Содержание'}
            count={{
              show: true,
              max: 200,
            }}
          />
        </Form.Item>
      </section>
      <Divider />
      <Label title={'Заметка'} classname={'text-yellow-500'} icon={TbPin} />
      <section className={'grid grid-cols-1'}>
        <Form.Item name={'note'}>
          <Input.TextArea
            placeholder={'Заметка будет видна только Вам'}
            count={{
              show: true,
              max: 200,
            }}
          />
        </Form.Item>
      </section>
    </>
  );
}
