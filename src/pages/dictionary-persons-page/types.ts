export type Person = {
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone_number: string;
  role: string;
  is_active: boolean;
  created_at: string;
  id: string;
};
export type PersonFormValue = Omit<Person, 'id' | 'created_at'>;
