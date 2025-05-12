export interface SettingsRouteStep {
  id: string;
  name: string;
  is_required: boolean;
  order: number;
  created_at: string;
  route: string;
}

export interface SettingsRoute {
  id: string;
  name: string;
  is_active: boolean;
  created_at: string;
  document_type: string;
  document_type_display: string;
  steps_count: number;
}
