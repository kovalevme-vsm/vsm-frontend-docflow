export interface IRouteStep {
  name: string;
  step_type: string;
  status: string;
  is_required: boolean;
  order: number;
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
