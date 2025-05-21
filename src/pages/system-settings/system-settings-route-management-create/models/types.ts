export interface IRouteStep {
  name: string;
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
