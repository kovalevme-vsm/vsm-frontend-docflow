import { Checkbox, Form, FormInstance } from 'antd';
import { ReactElement } from 'react';

import { IRouteStepParticipant } from 'entities/route-management-form/models/types.ts';
import SelectInfinite from 'entities/select-infinite';

import { QUERY } from 'shared/const';

type Props = {
  form: FormInstance<IRouteStepParticipant>;
};

export function RouteManagementStepParticipantForm({ form }: Props): ReactElement {
  const participantType = Form.useWatch('participant_type', form);
  return (
    <>
      <Form.Item<IRouteStepParticipant>
        name={'participant_type'}
        rules={[{ required: true, message: 'Пожалуйста, укажите тип участника' }]}
      >
        <SelectInfinite
          placeholder={'Тип участника'}
          apiPath={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.paths.index}
          queryKey={QUERY.SYSTEM_SELECT_PARTICIPANT_TYPES.keys.list}
        />
      </Form.Item>
      {participantType === 'DEPARTMENT' && (
        <Form.Item<IRouteStepParticipant> name={'department'}>
          <SelectInfinite
            placeholder={'Отдел'}
            apiPath={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_DEPARTMENT_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      {participantType === 'JOB_TITLE' && (
        <Form.Item<IRouteStepParticipant> name={'job_title'}>
          <SelectInfinite
            placeholder={'Должность'}
            apiPath={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_JOB_TITLE_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      {participantType === 'USER' && (
        <Form.Item<IRouteStepParticipant> name={'user'}>
          <SelectInfinite
            placeholder={'Пользователь'}
            apiPath={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.paths.index}
            queryKey={QUERY.SYSTEM_SETTINGS_USER_MANAGEMENT.keys.list}
          />
        </Form.Item>
      )}
      <Form.Item<IRouteStepParticipant> name="can_delegate" valuePropName="checked" label={null}>
        <Checkbox>Может делегировать</Checkbox>
      </Form.Item>
    </>
  );
}
