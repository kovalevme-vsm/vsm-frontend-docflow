import { Button, Form } from 'antd';
import { ReactElement } from 'react';
import { TbMinus, TbUsersGroup } from 'react-icons/tb';

import { DepartmentSelect } from 'entities/department-select';
import { JobTitleSelect } from 'entities/job-title-select';
import {
  ParticipantTypes,
  RouteParticipantTypeSelect,
} from 'entities/route-participant-type-select';
import { UserManagementSelect } from 'entities/user-management-select';

import { Label } from 'shared/ui';

export function RouteStepParticipants(): ReactElement {
  const form = Form.useFormInstance();
  const currentParticipants = Form.useWatch('participants', form);
  return (
    <>
      <Label title={'Участники маршрута'} icon={TbUsersGroup} />
      <Form.List
        name="participants"
        initialValue={['']}
        rules={[
          {
            validator: async (_, organizations) => {
              if (!organizations || organizations.length < 1) {
                return Promise.reject(
                  new Error('Укажите не менее одного участника')
                );
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name }, index) => (
              <Form.Item required={false} key={key}>
                <div className={'flex gap-2'}>
                  <div className={'flex-1'}>
                    <RouteParticipantTypeSelect
                      name={[name, 'participant_type']}
                    />
                  </div>
                  {currentParticipants &&
                    currentParticipants[name]?.participant_type &&
                    currentParticipants[name]?.participant_type ===
                      ParticipantTypes.SPECIFIC_USER && (
                      <div className={'flex-1'}>
                        <UserManagementSelect name={[name, 'user']} />
                      </div>
                    )}
                  {currentParticipants &&
                    currentParticipants[name]?.participant_type &&
                    currentParticipants[name]?.participant_type ===
                      ParticipantTypes.JOB_TITLE && (
                      <div className={'flex-1'}>
                        <JobTitleSelect name={[name, 'job_title']} />
                      </div>
                    )}
                  {currentParticipants &&
                    currentParticipants[name]?.participant_type &&
                    currentParticipants[name]?.participant_type ===
                      ParticipantTypes.DEPARTMENT && (
                      <div className={'flex-1'}>
                        <DepartmentSelect name={[name, 'department']} />
                      </div>
                    )}
                  {index > 0 && (
                    <Button
                      className="dynamic-delete-button"
                      icon={<TbMinus />}
                      danger
                      onClick={() => remove(name)}
                    ></Button>
                  )}
                </div>
              </Form.Item>
            ))}
            <Form.Item>
              <Button block onClick={() => add()}>
                Добавить участника
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}
