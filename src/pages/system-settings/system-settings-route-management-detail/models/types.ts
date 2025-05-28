export interface RouteData {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  document_type: string;
  document_type_display: string;
  steps_count: number;
  created_at: string;
  can_delete: boolean;
  nodes: { id: string; data: { label: string }; position: { x: number; y: number } }[];
  edges: { id: string; source: string; target: string }[];
}

interface RouteStepParticipantData {
  participant_type: string;
  department?: string;
  job_title?: string;
  user?: string;
}

export interface RouteStepData {
  id: string;
  name: string;
  route: string;
  step_type: string;
  status: string;
  is_required: boolean;
  participants: RouteStepParticipantData[];
}
