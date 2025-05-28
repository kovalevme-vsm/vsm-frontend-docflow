import { Button, Form, Input, Radio } from 'antd';
import { ReactElement, useEffect } from 'react';
import { IoGitCommit } from 'react-icons/io5';
import { useParams } from 'react-router';

import { useCreateRouteStep } from 'pages/system-settings/system-settings-route-management-detail/api/use-create-route-step.ts';
import { RouteStepData } from 'pages/system-settings/system-settings-route-management-detail/models/types.ts';

import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';
import { Label } from 'shared/ui';

export function RouteManagementStepSegment(): ReactElement {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { mutate: onCreateStep, isPending, isSuccess } = useCreateRouteStep();
  // const participants = Form.useWatch('participants', form);

  useEffect(() => {
    if (isSuccess) form.resetFields();
  }, [isSuccess]);

  return (
    <Form form={form} onFinish={(values) => onCreateStep({ route: id, ...values })}>
      <Label icon={IoGitCommit} title={'Параметры этапа'} />
      <Form.Item<RouteStepData>
        messageVariables={{ label: 'Наименование этапа' }}
        name={'name'}
        rules={[{ required: true }]}
      >
        <Input placeholder={'Наименование этапа'} />
      </Form.Item>
      <Form.Item<RouteStepData>
        messageVariables={{ label: 'Тип этапа' }}
        name={'step_type'}
        rules={[{ required: true }]}
      >
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SELECT_STEP_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_STEP_TYPES.keys.list}
          placeholder={'Тип этапа'}
          allowClear
        />
      </Form.Item>
      <Form.Item<RouteStepData>
        messageVariables={{ label: 'Статус завершения этапа' }}
        name={'status'}
        rules={[{ required: true }]}
      >
        <SelectInfinite
          apiPath={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.paths.index('statuses')}
          queryKey={QUERY.SYSTEM_SETTINGS_DICTIONARY_MANAGEMENT.keys.list('statuses')}
          placeholder={'Статус завершения этапа'}
          allowClear
        />
      </Form.Item>
      <Form.Item<RouteStepData> name="is_required" initialValue={true}>
        <Radio.Group
          block
          options={[
            { label: 'Обязательный', value: true },
            { label: 'Необязательный', value: false },
          ]}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form.Item>
        <Button loading={isPending} htmlType={'submit'} type={'primary'} block>
          Добавить
        </Button>
      </Form.Item>
      {/*<Divider />*/}
      {/*<Label icon={IoPersonAdd} title={'Участники этапа'} />*/}
      {/*<Form.List name={'participants'} initialValue={[]}>*/}
      {/*  {(fields, { add, remove }) => (*/}
      {/*    <>*/}
      {/*      {fields.map(({ key, name }) => (*/}
      {/*        <div key={key} className={'relative mb-2 rounded-xl bg-gray-100 px-4 pt-4 pb-2'}>*/}
      {/*          <Form.Item*/}
      {/*            name={[name, 'participant_type']}*/}
      {/*            rules={[{ required: true, message: 'Пожалуйста, укажите тип участника' }]}*/}
      {/*          >*/}
      {/*            <SelectInfinite*/}
      {/*              placeholder={'Тип участника'}*/}
      {/*              apiPath={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.paths.index}*/}
      {/*              queryKey={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.keys.list}*/}
      {/*            />*/}
      {/*          </Form.Item>*/}
      {/*          {participants && participants[name]?.participant_type === 'DEPARTMENT' && (*/}
      {/*            <Form.Item*/}
      {/*              name={[name, 'department']}*/}
      {/*              rules={[{ required: true, message: 'Пожалуйста, укажите Отдел' }]}*/}
      {/*            >*/}
      {/*              <SelectInfinite*/}
      {/*                placeholder={'Отдел'}*/}
      {/*                apiPath={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.index}*/}
      {/*                queryKey={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list}*/}
      {/*              />*/}
      {/*            </Form.Item>*/}
      {/*          )}*/}
      {/*          {participants && participants[name]?.participant_type === 'JOB_TITLE' && (*/}
      {/*            <Form.Item*/}
      {/*              name={[name, 'job_title']}*/}
      {/*              rules={[{ required: true, message: 'Пожалуйста, укажите Должность' }]}*/}
      {/*            >*/}
      {/*              <SelectInfinite*/}
      {/*                placeholder={'Должность'}*/}
      {/*                apiPath={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.index}*/}
      {/*                queryKey={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list}*/}
      {/*              />*/}
      {/*            </Form.Item>*/}
      {/*          )}*/}
      {/*          {participants && participants[name]?.participant_type === 'USER' && (*/}
      {/*            <Form.Item*/}
      {/*              name={[name, 'user']}*/}
      {/*              rules={[{ required: true, message: 'Пожалуйста, укажите Пользователя' }]}*/}
      {/*            >*/}
      {/*              <SelectInfinite*/}
      {/*                placeholder={'Пользователь'}*/}
      {/*                apiPath={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.index}*/}
      {/*                queryKey={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.list}*/}
      {/*              />*/}
      {/*            </Form.Item>*/}
      {/*          )}*/}
      {/*          <button*/}
      {/*            type={'button'}*/}
      {/*            onClick={() => remove(name)}*/}
      {/*            title={'Удалить строчку'}*/}
      {/*            className={'absolute -top-2 -right-2 cursor-pointer text-2xl text-red-500 hover:text-red-400'}*/}
      {/*          >*/}
      {/*            <TiDelete />*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*      <Form.Item>*/}
      {/*        <Button onClick={() => add()} block>*/}
      {/*          Добавить участника*/}
      {/*        </Button>*/}
      {/*      </Form.Item>*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</Form.List>*/}
    </Form>
  );
}
