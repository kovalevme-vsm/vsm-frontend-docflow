export interface UserManagerType {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  department: string;
  job_title: string;
  group_names: string[];
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
}
