export interface IRouteStepParticipant {
  participant_type: string;
  department?: string;
  job_title?: string;
  user?: string;
  can_delegate: boolean;
}

export interface IRouteStep {
  name: string;
  step_type: string;
  status: string;
  is_required: boolean;
  order: number;
  participants: IRouteStepParticipant[];
}

export interface IRoute {
  id: string;
  created_at: string;
  name: string;
  is_active: boolean;
  document_type: string;
  description: string;
  steps: IRouteStep[];
}
