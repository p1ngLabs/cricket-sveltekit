export interface AuthenticatedUser {
  first_name: string | null;
  last_name: string | null;
  username: string;
  gender: string | null;
  birthday: string | null;
  email: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  avatar: string | null;
  role: 'administrator' | 'moderator' | 'customer';
  active: boolean;
}

export interface ServerResponse {
  success: boolean;
  data?: any;
  message?: string;
}
