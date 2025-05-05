export interface RouteCreateFormValue {
  name: string;
  document_type: string;
  is_active: boolean;
  // steps: StepRoute[];
}

export interface StepRoute {
  name: string;
  order: number;
  is_required: boolean;
  status_on_start: string;
  status_on_complete: string;
  step_type: string;
  participants: StepRouteParticipant[];
}

export interface StepRouteParticipant {
  participant_type: string;
  user?: string;
  job_title?: string;
  department?: string;
}
