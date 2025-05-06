import { Form } from 'antd';
import { ReactElement } from 'react';
import { TbUsersGroup } from 'react-icons/tb';

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
  const currentParticipants = Form.useWatch('participant_type', form);
  return (
    <>
      <RouteParticipantTypeSelect
        label={<Label title={'Участники маршрута'} icon={TbUsersGroup} />}
        name={'participant_type'}
      />
      {currentParticipants &&
        currentParticipants === ParticipantTypes.SPECIFIC_USER && (
          <div className={'flex-1'}>
            <UserManagementSelect name={'participant_object_id'} />
          </div>
        )}
      {currentParticipants &&
        currentParticipants === ParticipantTypes.JOB_TITLE && (
          <div className={'flex-1'}>
            <JobTitleSelect name={'participant_object_id'} />
          </div>
        )}
      {currentParticipants &&
        currentParticipants === ParticipantTypes.DEPARTMENT && (
          <div className={'flex-1'}>
            <DepartmentSelect name={'participant_object_id'} />
          </div>
        )}
    </>
  );
}
