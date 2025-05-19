import { Checkbox, Form } from 'antd';
import { ReactElement } from 'react';

import { routeStepFormRules } from 'entities/route-forms/models/rules.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

export function RouteStepParticipantForm(): ReactElement {
  const form = Form.useFormInstance();
  const participantType = Form.useWatch('participant_type', form);
  return (
    <>
      <Form.Item name={'participant_type'} rules={routeStepFormRules.name}>
        <SelectInfinite
          placeholder={'Тип участника'}
          apiPath={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.keys.list}
        />
      </Form.Item>
      {participantType === 'DEPARTMENT' && (
        <Form.Item name={'department'}>
          <SelectInfinite
            placeholder={'Отдел'}
            apiPath={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      {participantType === 'JOB_TITLE' && (
        <Form.Item name={'job_title'}>
          <SelectInfinite
            placeholder={'Должность'}
            apiPath={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      {participantType === 'USER' && (
        <Form.Item name={'user'}>
          <SelectInfinite
            placeholder={'Пользователь'}
            apiPath={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      <Form.Item name="can_delegate" valuePropName="checked" label={null}>
        <Checkbox>Может делегировать</Checkbox>
      </Form.Item>
    </>
  );
}
