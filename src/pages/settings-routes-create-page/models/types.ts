export interface RouteCreateFormValue {
  name: string;
  document_type: string;
  is_active: boolean;
  steps: StepRoute[];
}

export interface StepRoute {
  name: string;
  order: number;
  is_required: boolean;
  status: string;
  allowed_action_codes: string[];
  participants_type: string;
  participants_object_id: string;
}
